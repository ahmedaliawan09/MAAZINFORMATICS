// models/service.js
import db from "../config/db.js";

// Get all services for navbar dropdown
export const getAllServices = async () => {
    const [rows] = await db
        .promise()
        .execute("SELECT id, service_name, slug FROM services WHERE is_active = 1 ORDER BY service_name");
    return rows;
};

// Get full service by slug (for dynamic page)
export const getServiceBySlug = async (slug) => {
    const [services] = await db
        .promise()
        .execute(
            "SELECT * FROM services WHERE slug = ? AND is_active = 1",
            [slug]
        );

    if (services.length === 0) return null;

    const service = services[0];

    // Fetch sections
    const [sections] = await db
        .promise()
        .execute(
            "SELECT * FROM service_sections WHERE service_id = ? ORDER BY sort_order ASC",
            [service.id]
        );

    // Populate each section with its content
    for (let section of sections) {
        let content = [];

        if (section.section_type === "features") {
            [content] = await db
                .promise()
                .execute(
                    "SELECT id, icon_name, title, description, highlight, sort_order FROM service_features WHERE section_id = ? ORDER BY sort_order",
                    [section.id]
                );
        } else if (["stats", "benefits"].includes(section.section_type)) {
            [content] = await db
                .promise()
                .execute(
                    "SELECT id, value, label, trend, sort_order FROM service_stats WHERE section_id = ? ORDER BY sort_order",
                    [section.id]
                );
        } else if (section.section_type === "process") {
            [content] = await db
                .promise()
                .execute(
                    "SELECT id, step_number, title, description, stats AS highlight, sort_order FROM service_process_steps WHERE section_id = ? ORDER BY sort_order",
                    [section.id]
                );
        } else if (["industries", "technologies"].includes(section.section_type)) {
            [content] = await db
                .promise()
                .execute(
                    "SELECT id, icon_name, title, description, stats AS highlight, color_from, color_to, sort_order FROM service_grid_items WHERE section_id = ? ORDER BY sort_order",
                    [section.id]
                );
        }
        // Add more section types later (faq, cta, etc.)

        section.content = content;
    }

    service.sections = sections;
    return service;
};

// Existing createService (keep it if you use admin to add basic service)
// In createService function (replace existing)
export const createService = async ({ service_name, user_id }) => {
    const slug = service_name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-+/g, "-");

    const [result] = await db
        .promise()
        .execute(
            "INSERT INTO services (service_name, slug, user_id) VALUES (?, ?, ?)",
            [service_name.trim(), slug, user_id]
        );

    return { id: result.insertId, service_name: service_name.trim(), slug, user_id };
};

// models/service.js (add these to your existing file)

export const getServiceForEdit = async (serviceId) => {
    const [services] = await db
        .promise()
        .execute("SELECT * FROM services WHERE id = ?", [serviceId]);

    if (services.length === 0) return null;

    const service = services[0];

    const [sections] = await db
        .promise()
        .execute(
            "SELECT * FROM service_sections WHERE service_id = ? ORDER BY sort_order",
            [service.id]
        );

    for (let section of sections) {
        let content = [];
        const { section_type, id: sectionId } = section;

        if (section_type === "features") {
            [content] = await db.promise().execute(
                "SELECT * FROM service_features WHERE section_id = ? ORDER BY sort_order",
                [sectionId]
            );
        } else if (["stats", "benefits"].includes(section_type)) {
            [content] = await db.promise().execute(
                "SELECT * FROM service_stats WHERE section_id = ? ORDER BY sort_order",
                [sectionId]
            );
        } else if (section_type === "process") {
            [content] = await db.promise().execute(
                "SELECT * FROM service_process_steps WHERE section_id = ? ORDER BY sort_order",
                [sectionId]
            );
        } else if (["industries", "technologies"].includes(section_type)) {
            [content] = await db.promise().execute(
                "SELECT * FROM service_grid_items WHERE section_id = ? ORDER BY sort_order",
                [sectionId]
            );
        }

        section.content = content;
    }

    service.sections = sections;
    return service;
};

// Update basic service info (slug, colors, titles, etc.)
export const updateServiceBasic = async (id, data) => {
    const fields = [];
    const values = [];

    if (data.service_name) {
        fields.push("service_name = ?");
        values.push(data.service_name);
        const slug = data.service_name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
        fields.push("slug = ?");
        values.push(slug);
    }
    if (data.short_description !== undefined) { fields.push("short_description = ?"); values.push(data.short_description); }
    if (data.hero_title !== undefined) { fields.push("hero_title = ?"); values.push(data.hero_title); }
    if (data.hero_subtitle !== undefined) { fields.push("hero_subtitle = ?"); values.push(data.hero_subtitle); }
    if (data.icon_name !== undefined) { fields.push("icon_name = ?"); values.push(data.icon_name); }
    if (data.primary_color !== undefined) { fields.push("primary_color = ?"); values.push(data.primary_color); }
    if (data.gradient_from !== undefined) { fields.push("gradient_from = ?"); values.push(data.gradient_from); }
    if (data.gradient_to !== undefined) { fields.push("gradient_to = ?"); values.push(data.gradient_to); }

    if (fields.length === 0) return;

    values.push(id);
    await db.promise().execute(
        `UPDATE services SET ${fields.join(", ")} WHERE id = ?`,
        values
    );
};

// Add / Update / Delete sections and content (you'll call these from controller)
export const createSection = async (serviceId, type, title = "", subtitle = "") => {
    const [result] = await db.promise().execute(
        "INSERT INTO service_sections (service_id, section_type, title, subtitle) VALUES (?, ?, ?, ?)",
        [serviceId, type, title, subtitle]
    );
    return result.insertId;
};

export const deleteSection = async (sectionId) => {
    await db.promise().execute("DELETE FROM service_sections WHERE id = ?", [sectionId]);
};

// Generic content add (features, stats, etc.)
export const addFeature = async (sectionId, data) => {
    await db.promise().execute(
        "INSERT INTO service_features (section_id, icon_name, title, description, highlight) VALUES (?, ?, ?, ?, ?)",
        [sectionId, data.icon_name, data.title, data.description, data.highlight || null]
    );
};

export const addStat = async (sectionId, data) => {
    await db.promise().execute(
        "INSERT INTO service_stats (section_id, value, label, trend) VALUES (?, ?, ?, ?)",
        [sectionId, data.value, data.label, data.trend || null]
    );
};

export const addProcessStep = async (sectionId, data) => {
    await db.promise().execute(
        "INSERT INTO service_process_steps (section_id, step_number, title, description, stats) VALUES (?, ?, ?, ?, ?)",
        [sectionId, data.step_number, data.title, data.description, data.stats || null]
    );
};

export const addGridItem = async (sectionId, data) => {
    await db.promise().execute(
        "INSERT INTO service_grid_items (section_id, icon_name, title, description, stats, color_from, color_to) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [sectionId, data.icon_name, data.title, data.description, data.stats || null, data.color_from || null, data.color_to || null]
    );
};

// Delete any content row
export const deleteContentRow = async (table, id) => {
    await db.promise().execute(`DELETE FROM ${table} WHERE id = ?`, [id]);
};