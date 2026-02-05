"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import {
    Plus, Trash2, Save, Loader2, ChevronLeft, Edit2, X, Check,
    LayoutDashboard, Palette, Type, Layers, Sparkles, ChevronRight,
    Eye, Copy, Search, MoreVertical, Grid, List, Filter,
    ArrowUpRight, Calendar, Users, TrendingUp, BarChart3,
    Image as ImageIcon, Link, Layout, Settings, Link2
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const iconOptions = [
    "CheckCircle", "Clock", "Shield", "TrendingUp", "Users", "Award", "Zap",
    "Globe", "Phone", "Code", "FileText", "DollarSign", "Headphones", "Cpu", "Heart"
]

const sectionTypes = [
    { id: "features", label: "Features", icon: "CheckCircle" },
    { id: "stats", label: "Stats", icon: "TrendingUp" },
    { id: "benefits", label: "Benefits", icon: "Award" },
    { id: "process", label: "Process", icon: "Clock" },
    { id: "industries", label: "Industries", icon: "Globe" },
    { id: "technologies", label: "Technologies", icon: "Cpu" },
    { id: "faq", label: "FAQ", icon: "HelpCircle" }
]

const layoutStyles = [
    { id: "default", label: "Default" },
    { id: "centered", label: "Centered" },
    { id: "split", label: "Split" },
    { id: "full-width", label: "Full Width" },
    { id: "card-grid", label: "Card Grid" }
]

const colorPalette = {
    primary: "#7C3AED",
    secondary: "#10B981",
    accent: "#3B82F6",
    dark: "#0F172A",
    light: "#F8FAFC",
    gray: "#64748B"
}


export default function ServicesSection() {
    const [services, setServices] = useState([])
    const [selectedService, setSelectedService] = useState(null)
    const [newServiceName, setNewServiceName] = useState("")
    const [editingServiceId, setEditingServiceId] = useState(null)
    const [editServiceName, setEditServiceName] = useState("")
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [query, setQuery] = useState("")
    const [viewMode, setViewMode] = useState("grid")
    const [activeTab, setActiveTab] = useState("content")
    const [mediaFiles, setMediaFiles] = useState([])

    const fetchServices = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/service/getservices")
            setServices(res.data.services || [])
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchServices()
    }, [])

    const handleAddService = async (e) => {
        e.preventDefault()
        if (!newServiceName.trim()) return
        setLoading(true)
        setErrorMsg("")
        try {
            await axios.post("http://localhost:5000/api/service/addservices",
                { service_name: newServiceName.trim() },
                { withCredentials: true }
            )
            setNewServiceName("")
            fetchServices()
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Failed to add")
        } finally {
            setLoading(false)
        }
    }

    const startEdit = (service) => {
        setEditingServiceId(service.id)
        setEditServiceName(service.service_name)
    }

    const saveEdit = async () => {
        if (!editServiceName.trim()) return
        try {
            await axios.put(`http://localhost:5000/api/service/updateservice/${editingServiceId}`,
                { service_name: editServiceName.trim() },
                { withCredentials: true }
            )
            fetchServices()
            setEditingServiceId(null)
            setEditServiceName("")
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Update failed")
        }
    }

    const deleteService = async (id) => {
        if (!confirm(`Delete "${services.find(s => s.id === id)?.service_name}" and all its content?`)) return
        try {
            await axios.delete(`http://localhost:5000/api/service/deleteservice/${id}`,
                { withCredentials: true }
            )
            fetchServices()
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Delete failed")
        }
    }

    const loadServiceContent = async (service) => {
        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:5000/api/service/content/${service.id}`);

            const sections = (res.data.service.sections || []).map(section => ({
                ...section,
                content: section.content || []
            }));

            setSelectedService({
                ...service,
                sections: sections,
                hero_title: res.data.service.hero_title || service.service_name,
                hero_subtitle: res.data.service.hero_subtitle || "Premium Service",
                hero_cta_text: res.data.service.hero_cta_text || "Get Started",
                hero_cta_link: res.data.service.hero_cta_link || "#contact",
                hero_image: res.data.service.hero_image || "",
                hero_background_image: res.data.service.hero_background_image || "",
                icon_name: res.data.service.icon_name || "FileText",
                primary_color: res.data.service.primary_color || colorPalette.primary,
                gradient_from: res.data.service.gradient_from || colorPalette.primary,
                gradient_to: res.data.service.gradient_to || colorPalette.accent,
                short_description: res.data.service.short_description || ""
            });

            console.log("Loaded service data:", {
                sectionCount: sections.length,
                faqSections: sections.filter(s => s.section_type === 'faq').map(s => ({
                    id: s.id,
                    contentCount: s.content?.length
                }))
            });

        } catch (err) {
            console.error("Error loading content:", err);
            setErrorMsg("Failed to load content");
        } finally {
            setLoading(false);
        }
    };

    const saveContent = async () => {
        try {
            setSaving(true);
            setErrorMsg("");

            const formData = new FormData();
            let hasImageChanges = false;

            if (selectedService.heroImageFile || selectedService.heroBgFile) {
                hasImageChanges = true;
                console.log("🖼️ Detected hero image changes");
            }

            selectedService.sections.forEach((sec, idx) => {
                if (sec.bgFile) {
                    hasImageChanges = true;
                    console.log(`🖼️ Detected section ${idx} background change`);
                }
                sec.content?.forEach((item, itemIdx) => {
                    if (item.imageFile) {
                        hasImageChanges = true;
                        console.log(`🖼️ Detected item ${itemIdx} image change`);
                    }
                });
            });

            console.log("💾 Saving changes...");
            console.log("📊 Text changes:", !hasImageChanges ? "Only text" : "With images");
            console.log("📁 Files to upload:",
                [selectedService.heroImageFile, selectedService.heroBgFile].filter(Boolean).length
            );

            const basicData = {
                service_name: selectedService.service_name,
                hero_title: selectedService.hero_title,
                hero_subtitle: selectedService.hero_subtitle,
                hero_cta_text: selectedService.hero_cta_text,
                hero_cta_link: selectedService.hero_cta_link,
                icon_name: selectedService.icon_name,
                primary_color: selectedService.primary_color,
                gradient_from: selectedService.gradient_from,
                gradient_to: selectedService.gradient_to,
            };

            if (selectedService.short_description) {
                basicData.short_description = selectedService.short_description;
            }
            if (selectedService.is_active !== undefined) {
                basicData.is_active = selectedService.is_active;
            }

            formData.append("basic", JSON.stringify(basicData));

            const sectionsData = selectedService.sections.map((sec, secIdx) => ({
                id: sec.id || null,
                section_type: sec.section_type,
                title: sec.title || "",
                subtitle: sec.subtitle || "",
                layout_style: sec.layout_style || "default",
                background_image: sec.background_image || "",
                cta_text: sec.cta_text || "",
                cta_link: sec.cta_link || "",
                secondary_cta_text: sec.secondary_cta_text || "",
                secondary_cta_link: sec.secondary_cta_link || "",
                sort_order: secIdx,
                tempId: sec.tempId || (sec.id ? null : `temp-sec-${Date.now()}-${secIdx}`),
                content: sec.content?.map((item, itemIdx) => {
                    const itemId = item.id || null;
                    const baseItem = {
                        id: itemId,
                        sort_order: itemIdx,
                        tempId: item.tempId || (itemId ? null : `temp-item-${Date.now()}-${secIdx}-${itemIdx}`)
                    };

                    if (sec.section_type === "features") {
                        return {
                            ...baseItem,
                            icon_name: item.icon_name || "CheckCircle",
                            title: item.title || "",
                            description: item.description || "",
                            highlight: item.highlight || "",
                            image: item.image || ""
                        };
                    } else if (["stats", "benefits"].includes(sec.section_type)) {
                        return {
                            ...baseItem,
                            value: item.value || "",
                            label: item.label || "",
                            trend: item.trend || "",
                            icon_name: item.icon_name || "TrendingUp"
                        };
                    } else if (sec.section_type === "process") {
                        return {
                            ...baseItem,
                            step_number: item.step_number || "",
                            title: item.title || "",
                            description: item.description || "",
                            stats: item.stats || "",
                            icon_name: item.icon_name || "Clock",
                            image: item.image || ""
                        };
                    } else if (["industries", "technologies"].includes(sec.section_type)) {
                        return {
                            ...baseItem,
                            icon_name: item.icon_name || "Globe",
                            title: item.title || "",
                            description: item.description || "",
                            stats: item.stats || "",
                            color_from: item.color_from || colorPalette.primary,
                            color_to: item.color_to || colorPalette.accent,
                            link: item.link || ""
                        };
                    } else if (sec.section_type === "faq") {
                        return {
                            ...baseItem,
                            question: item.question || "",
                            answer: item.answer || ""
                        };
                    }

                    return baseItem;
                }) || []
            }));
            formData.append("sections", JSON.stringify(sectionsData));

            if (selectedService.heroImageFile) {
                formData.append("hero_image", selectedService.heroImageFile);
            }
            if (selectedService.heroBgFile) {
                formData.append("hero_background_image", selectedService.heroBgFile);
            }

            selectedService.sections.forEach(sec => {
                if (sec.bgFile) {
                    formData.append(`section_bg_${sec.tempId}`, sec.bgFile);
                }
            });

            selectedService.sections.forEach(sec => {
                sec.content?.forEach(item => {
                    if (item.imageFile) {
                        formData.append(`item_image_${item.tempId}`, item.imageFile);
                    }
                });
            });

            mediaFiles.forEach((file, index) => {
                if (file.file) {
                    formData.append(`media_${index}`, file.file);
                    formData.append(`media_data_${index}`, JSON.stringify({
                        alt_text: file.alt_text || "",
                        caption: file.caption || "",
                        media_type: file.media_type || "image"
                    }));
                }
            });

            console.log("🚀 Sending optimized update...");

            const response = await axios.put(
                `http://localhost:5000/api/service/content/${selectedService.id}`,
                formData,
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'multipart/form-data' },
                    timeout: hasImageChanges ? 120000 : 15000, // 2 minutes for images, 15 seconds for text only
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        console.log(`📤 Upload progress: ${percentCompleted}%`);
                    }
                }
            );

            console.log("✅ Update successful:", response.data);

            setSelectedService(prev => ({
                ...prev,
                heroImageFile: undefined,
                heroBgFile: undefined,
                sections: prev.sections.map(sec => ({
                    ...sec,
                    bgFile: undefined,
                    content: sec.content?.map(item => ({
                        ...item,
                        imageFile: undefined
                    }))
                }))
            }));

            const successEl = document.createElement('div');
            successEl.className = 'fixed top-4 right-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg z-50';
            successEl.textContent = '✅ Changes saved successfully!';
            document.body.appendChild(successEl);
            setTimeout(() => successEl.remove(), 3000);

            loadServiceContent(selectedService);
            setMediaFiles([]);

        } catch (err) {
            console.error("❌ Save failed:", err);

            let errorMessage = "Save failed";
            
            if (err.code === 'ECONNABORTED' || err.message?.includes('timeout')) {
                errorMessage = "⏱️ Upload timed out. Try these solutions:\n" +
                    "1. Use smaller images (under 2MB each)\n" +
                    "2. Upload fewer images at once\n" +
                    "3. Check your internet connection\n" +
                    "4. Try saving text changes first, then add images";
            } else if (err.response?.status === 408) {
                errorMessage = "⏱️ Cloudinary upload timeout. Please:\n" +
                    "1. Compress images before uploading\n" +
                    "2. Use images under 2MB\n" +
                    "3. Upload one image at a time";
            } else if (err.response?.status === 413) {
                errorMessage = "📦 Files too large. Please reduce image sizes to under 2MB each.";
            } else if (err.response?.data?.message) {
                errorMessage = err.response.data.message;
            }

            setErrorMsg(errorMessage);
            
            // Show user-friendly alert
            alert(errorMessage);
        } finally {
            setSaving(false);
        }
    };

    const addSection = (type) => {
        const newSection = {
            id: `temp-${Date.now()}`,
            section_type: type,
            title: type.charAt(0).toUpperCase() + type.slice(1),
            subtitle: "",
            layout_style: "default",
            background_image: "",
            cta_text: "",
            cta_link: "",
            secondary_cta_text: "",
            secondary_cta_link: "",
            content: [],
            isNew: true,
            tempId: `temp-sec-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        }
        setSelectedService(prev => ({ ...prev, sections: [...prev.sections, newSection] }))
    }

    const deleteSection = (index) => {
        setSelectedService(prev => ({
            ...prev,
            sections: prev.sections.filter((_, i) => i !== index)
        }))
    }

    const addItem = (sectionIndex) => {
        setSelectedService(prev => {
            const sections = [...prev.sections];
            const section = sections[sectionIndex];
            const type = section.section_type;

            const tempId = `temp-item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

            let newItem = {
                tempId: tempId,
                sort_order: section.content?.length || 0
            };

            if (type === "features") {
                newItem = {
                    ...newItem,
                    icon_name: "CheckCircle",
                    title: "New Feature",
                    description: "Feature description",
                    highlight: "New",
                    image: ""
                };
            } else if (["stats", "benefits"].includes(type)) {
                newItem = {
                    ...newItem,
                    value: "99%",
                    label: "Success Rate",
                    trend: "+5%",
                    icon_name: "TrendingUp"
                };
            } else if (type === "process") {
                newItem = {
                    ...newItem,
                    step_number: "01",
                    title: "Step Title",
                    description: "Step details here",
                    stats: "",
                    icon_name: "Clock",
                    image: ""
                };
            } else if (["industries", "technologies"].includes(type)) {
                newItem = {
                    ...newItem,
                    icon_name: "Globe",
                    title: "New Item",
                    description: "Item description",
                    stats: "",
                    color_from: colorPalette.primary,
                    color_to: colorPalette.accent,
                    link: ""
                };
            } else if (type === "faq") {
                newItem = {
                    ...newItem,
                    question: "Frequently asked question?",
                    answer: "Detailed answer goes here."
                };
            }

            const updatedSection = {
                ...section,
                content: [...(section.content || []), newItem]
            };

            sections[sectionIndex] = updatedSection;

            return { ...prev, sections };
        });
    };

    const updateItem = (sectionIndex, itemIndex, field, value) => {
        setSelectedService(prev => {
            const sections = [...prev.sections]
            sections[sectionIndex].content[itemIndex][field] = value
            return { ...prev, sections }
        })
    }

    const deleteItem = (sectionIndex, itemIndex) => {
        setSelectedService(prev => {
            const sections = [...prev.sections];

            if (sections[sectionIndex]?.content) {
                sections[sectionIndex] = {
                    ...sections[sectionIndex],
                    content: sections[sectionIndex].content.filter((_, idx) => idx !== itemIndex)
                };
            }

            return { ...prev, sections };
        });
    };

    const updateSectionField = (sectionIndex, field, value) => {
        setSelectedService(prev => {
            const sections = [...prev.sections]
            sections[sectionIndex][field] = value
            return { ...prev, sections }
        })
    }

    const compressImage = async (file, maxWidth = 1000, quality = 0.6) => {
        return new Promise((resolve, reject) => {
            // Always compress images larger than 500KB
            if (!file.type.startsWith('image/') || file.size < 500 * 1024) {
                console.log("Skipping compression for small or non-image file");
                resolve(file);
                return;
            }

            console.log(`🔄 Compressing ${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)...`);

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    try {
                        const canvas = document.createElement('canvas');
                        let width = img.width;
                        let height = img.height;

                        // More aggressive resizing
                        if (width > maxWidth) {
                            height = Math.round((height * maxWidth) / width);
                            width = maxWidth;
                        }

                        canvas.width = width;
                        canvas.height = height;

                        const ctx = canvas.getContext('2d');
                        // Enable image smoothing for better quality
                        ctx.imageSmoothingEnabled = true;
                        ctx.imageSmoothingQuality = 'high';
                        ctx.drawImage(img, 0, 0, width, height);

                        canvas.toBlob(
                            (blob) => {
                                if (!blob) {
                                    console.warn('⚠️ Compression failed, using original file');
                                    resolve(file);
                                    return;
                                }
                                const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, '.jpg'), {
                                    type: 'image/jpeg',
                                    lastModified: Date.now(),
                                });
                                const originalSize = (file.size / 1024 / 1024).toFixed(2);
                                const compressedSize = (compressedFile.size / 1024 / 1024).toFixed(2);
                                const savings = ((1 - compressedFile.size / file.size) * 100).toFixed(0);
                                console.log(`✅ Compressed: ${originalSize}MB → ${compressedSize}MB (${savings}% smaller)`);
                                resolve(compressedFile);
                            },
                            'image/jpeg',
                            quality
                        );
                    } catch (error) {
                        console.error("❌ Canvas compression error:", error);
                        resolve(file);
                    }
                };
                img.onerror = () => {
                    console.error("❌ Image loading error");
                    resolve(file);
                };
            };
            reader.onerror = () => {
                console.error("❌ File reading error");
                resolve(file);
            };
        });
    };

    const handleImageUpload = async (field, file, sectionIndex = null, itemIndex = null) => {
        if (!file) return;

        console.log(`📤 Uploading ${field}:`, file.name, `Size: ${(file.size / 1024 / 1024).toFixed(2)}MB`);

        // Check file size before processing
        if (file.size > 3 * 1024 * 1024) {
            alert(`⚠️ File "${file.name}" is too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Please use images under 3MB or they will be compressed.`);
        }

        try {
            let processedFile = file;
            // Always compress images larger than 500KB
            if (file.type.startsWith('image/') && file.size > 500 * 1024) {
                console.log("🔄 Compressing image...");
                processedFile = await compressImage(file, 1000, 0.6);
                
                // If still too large after compression, compress more aggressively
                if (processedFile.size > 2 * 1024 * 1024) {
                    console.log("🔄 File still large, compressing more aggressively...");
                    processedFile = await compressImage(processedFile, 800, 0.5);
                }
            }

            const objectUrl = URL.createObjectURL(processedFile);

            if (field === "hero_image") {
                setSelectedService(prev => ({
                    ...prev,
                    heroImageFile: processedFile,
                    hero_image: objectUrl
                }));
                console.log("Hero image uploaded successfully");
            } else if (field === "hero_background_image") {
                setSelectedService(prev => ({
                    ...prev,
                    heroBgFile: processedFile,
                    hero_background_image: objectUrl
                }));
                console.log("Hero background uploaded successfully");
            } else if (field === "section_bg") {
                setSelectedService(prev => {
                    const sections = [...prev.sections];
                    sections[sectionIndex] = {
                        ...sections[sectionIndex],
                        bgFile: processedFile,
                        background_image: objectUrl,
                        tempId: sections[sectionIndex].tempId || `temp-sec-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
                    };
                    return { ...prev, sections };
                });
                console.log(`Section ${sectionIndex} background uploaded`);
            } else if (field === "item_image") {
                setSelectedService(prev => {
                    const sections = [...prev.sections];
                    sections[sectionIndex].content[itemIndex] = {
                        ...sections[sectionIndex].content[itemIndex],
                        imageFile: processedFile,
                        image: objectUrl,
                        tempId: sections[sectionIndex].content[itemIndex].tempId || `temp-item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
                    };
                    return { ...prev, sections };
                });
                console.log(`Item image uploaded to section ${sectionIndex}, item ${itemIndex}`);
            }
        } catch (error) {
            console.error("Image upload failed:", error);
            const objectUrl = URL.createObjectURL(file);

            if (field === "hero_image") {
                setSelectedService(prev => ({
                    ...prev,
                    heroImageFile: file,
                    hero_image: objectUrl
                }));
            } else if (field === "hero_background_image") {
                setSelectedService(prev => ({
                    ...prev,
                    heroBgFile: file,
                    hero_background_image: objectUrl
                }));
            }
        }
    };

    const addMediaFile = (file) => {
        if (!file) return
        const newMedia = {
            id: `media-${Date.now()}`,
            file: file,
            preview: URL.createObjectURL(file),
            alt_text: "",
            caption: "",
            media_type: file.type.startsWith('image') ? 'image' : 'video'
        }
        setMediaFiles(prev => [...prev, newMedia])
    }

    const updateMediaField = (index, field, value) => {
        setMediaFiles(prev => {
            const updated = [...prev]
            updated[index][field] = value
            return updated
        })
    }

    const removeMediaFile = (index) => {
        setMediaFiles(prev => prev.filter((_, i) => i !== index))
    }

    // List View
    if (!selectedService) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
                {/* Modern Header with Glass Effect */}
                <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
                    <div className="px-8 py-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    Services Manager
                                </h1>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                    Manage and customize your service pages with ease
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                {/* Search Bar */}
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search services..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl w-80 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                {/* View Toggle */}
                                <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1 border border-gray-200 dark:border-gray-700">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`px-4 py-2 rounded-lg transition-all ${viewMode === "grid" 
                                            ? "bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm" 
                                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`}
                                    >
                                        <Grid className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`px-4 py-2 rounded-lg transition-all ${viewMode === "list" 
                                            ? "bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm" 
                                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`}
                                    >
                                        <List className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-8 max-w-7xl mx-auto">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Services</p>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{services.length}</h3>
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                    <Layers className="w-7 h-7 text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Services</p>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{services.length}</h3>
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <TrendingUp className="w-7 h-7 text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Performance</p>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">Excellent</h3>
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                    <BarChart3 className="w-7 h-7 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add Service Card */}
                    <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 rounded-2xl p-8 mb-8 shadow-xl shadow-purple-500/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-white">Create New Service</h3>
                                <p className="text-purple-100 mt-2">Add a new service page to your portfolio</p>
                            </div>
                            <form onSubmit={handleAddService} className="flex gap-3">
                                <input
                                    type="text"
                                    value={newServiceName}
                                    onChange={(e) => setNewServiceName(e.target.value)}
                                    placeholder="Enter service name"
                                    className="px-5 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 w-80 font-medium"
                                    disabled={loading}
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
                                >
                                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                                    Create Service
                                </button>
                            </form>
                        </div>
                        {errorMsg && (
                            <div className="mt-4 px-4 py-3 bg-red-500/20 border border-red-300/30 rounded-xl text-red-100 text-sm">
                                {errorMsg}
                            </div>
                        )}
                    </div>

                    {/* Services Grid */}
                    {viewMode === "grid" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.filter(s => !query || s.service_name.toLowerCase().includes(query.toLowerCase())).map((service) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300"
                                >
                                    <div
                                        className="h-3 w-full"
                                        style={{
                                            background: `linear-gradient(90deg, ${service.gradient_from || colorPalette.primary}, ${service.gradient_to || colorPalette.accent})`
                                        }}
                                    />
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                    {service.service_name}
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg inline-block">
                                                    /services/{service.slug}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-5">
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                                                Active
                                            </span>
                                            {service.updated_at && (
                                                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(service.updated_at).toLocaleDateString()}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => loadServiceContent(service)}
                                                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all flex items-center justify-center gap-2 font-semibold shadow-lg shadow-purple-500/30"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => window.open(`/services/${service.slug}`, "_blank")}
                                                className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                                                title="Preview"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => deleteService(service.id)}
                                                className="px-4 py-3 border-2 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (

                        /* Table View */
                        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                        <th className="text-left p-5 text-sm font-semibold text-gray-700 dark:text-gray-300">Service</th>
                                        <th className="text-left p-5 text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                                        <th className="text-left p-5 text-sm font-semibold text-gray-700 dark:text-gray-300">Last Updated</th>
                                        <th className="text-left p-5 text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.filter(s => !query || s.service_name.toLowerCase().includes(query.toLowerCase())).map((service) => (
                                        <tr key={service.id} className="border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="p-5">
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${service.gradient_from || colorPalette.primary}30, ${service.gradient_to || colorPalette.accent}30)`
                                                        }}
                                                    >
                                                        <Layers className="w-6 h-6" style={{ color: service.primary_color || colorPalette.primary }} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 dark:text-white text-base">{service.service_name}</h4>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">/services/{service.slug}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-5">
                                                <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="p-5 text-gray-600 dark:text-gray-400 text-sm font-medium">
                                                {service.updated_at ? new Date(service.updated_at).toLocaleDateString() : 'Never'}
                                            </td>
                                            <td className="p-5">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => loadServiceContent(service)}
                                                        className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2 shadow-sm"
                                                    >
                                                        <Edit2 className="w-4 h-4" />
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => deleteService(service.id)}
                                                        className="px-4 py-2 border-2 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    // Content Editor View
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
            {/* Editor Header */}
            <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
                <div className="px-8 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <button
                                onClick={() => setSelectedService(null)}
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                <span>Back to Services</span>
                            </button>
                            <div className="h-8 w-px bg-gray-300 dark:bg-gray-700" />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedService.service_name}</h1>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Editing service content and settings</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => window.open(`/services/${selectedService.slug}`, "_blank")}
                                className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium"
                            >
                                <Eye className="w-4 h-4" />
                                Preview
                            </button>
                            <button
                                onClick={() => navigator.clipboard?.writeText(`/services/${selectedService.slug}`)}
                                className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium"
                            >
                                <Copy className="w-4 h-4" />
                                Copy URL
                            </button>
                            <button
                                onClick={saveContent}
                                disabled={saving}
                                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all disabled:opacity-50 font-semibold shadow-lg shadow-purple-500/30"
                            >
                                {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                {saving ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 mt-5">
                        {["content", "media"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === tab
                                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 shadow-sm"
                                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Editor Content */}
            <div className="p-8 max-w-7xl mx-auto">
                {activeTab === "content" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Panel - Basic Settings */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Service Basic Info */}
                            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-5 flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-purple-600" />
                                    Service Info
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Service Name</label>
                                        <input
                                            type="text"
                                            value={selectedService.service_name}
                                            onChange={(e) => setSelectedService(prev => ({ ...prev, service_name: e.target.value }))}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Short Description</label>
                                        <textarea
                                            value={selectedService.short_description || ""}
                                            onChange={(e) => setSelectedService(prev => ({ ...prev, short_description: e.target.value }))}
                                            rows={3}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Brief description for listings"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Status</label>
                                        <select
                                            value={selectedService.is_active || 1}
                                            onChange={(e) => setSelectedService(prev => ({ ...prev, is_active: parseInt(e.target.value) }))}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        >
                                            <option value={1}>Active</option>
                                            <option value={0}>Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Section Settings */}
                            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-5 flex items-center gap-2">
                                    <ImageIcon className="w-5 h-5 text-purple-600" />
                                    Hero Section
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Hero Title</label>
                                        <input
                                            type="text"
                                            value={selectedService.hero_title}
                                            onChange={(e) => setSelectedService(prev => ({ ...prev, hero_title: e.target.value }))}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Hero Subtitle</label>
                                        <textarea
                                            value={selectedService.hero_subtitle}
                                            onChange={(e) => setSelectedService(prev => ({ ...prev, hero_subtitle: e.target.value }))}
                                            rows={3}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">CTA Text</label>
                                            <input
                                                type="text"
                                                value={selectedService.hero_cta_text}
                                                onChange={(e) => setSelectedService(prev => ({ ...prev, hero_cta_text: e.target.value }))}
                                                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">CTA Link</label>
                                            <input
                                                type="text"
                                                value={selectedService.hero_cta_link}
                                                onChange={(e) => setSelectedService(prev => ({ ...prev, hero_cta_link: e.target.value }))}
                                                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Hero Image</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => e.target.files[0] && handleImageUpload("hero_image", e.target.files[0])}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Hero Background</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => e.target.files[0] && handleImageUpload("hero_background_image", e.target.files[0])}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Design Settings */}
                            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-5 flex items-center gap-2">
                                    <Palette className="w-5 h-5 text-purple-600" />
                                    Design Settings
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Icon</label>
                                        <select
                                            value={selectedService.icon_name}
                                            onChange={(e) => setSelectedService(prev => ({ ...prev, icon_name: e.target.value }))}
                                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        >
                                            {iconOptions.map(i => (
                                                <option key={i} value={i}>{i}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Primary Color</label>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="color"
                                                value={selectedService.primary_color}
                                                onChange={(e) => setSelectedService(prev => ({
                                                    ...prev,
                                                    primary_color: e.target.value,
                                                    gradient_from: e.target.value
                                                }))}
                                                className="w-14 h-14 rounded-xl cursor-pointer border-2 border-gray-200 dark:border-gray-700"
                                            />
                                            <input
                                                type="text"
                                                value={selectedService.primary_color}
                                                onChange={(e) => setSelectedService(prev => ({
                                                    ...prev,
                                                    primary_color: e.target.value,
                                                    gradient_from: e.target.value
                                                }))}
                                                className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Gradient Colors</label>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium">From</div>
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="color"
                                                        value={selectedService.gradient_from}
                                                        onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_from: e.target.value }))}
                                                        className="w-12 h-12 rounded-xl cursor-pointer border-2 border-gray-200 dark:border-gray-700"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={selectedService.gradient_from}
                                                        onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_from: e.target.value }))}
                                                        className="flex-1 px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-sm font-mono bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium">To</div>
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="color"
                                                        value={selectedService.gradient_to}
                                                        onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_to: e.target.value }))}
                                                        className="w-12 h-12 rounded-xl cursor-pointer border-2 border-gray-200 dark:border-gray-700"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={selectedService.gradient_to}
                                                        onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_to: e.target.value }))}
                                                        className="flex-1 px-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-sm font-mono bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="h-24 rounded-xl mt-4 border-2 border-gray-200 dark:border-gray-700 shadow-inner"
                                            style={{
                                                background: `linear-gradient(90deg, ${selectedService.gradient_from}, ${selectedService.gradient_to})`
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Sections */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm mb-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-xl flex items-center gap-2">
                                            <Layers className="w-6 h-6 text-purple-600" />
                                            Content Sections
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Manage sections and their content</p>
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {sectionTypes.map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => addSection(type.id)}
                                                className="px-4 py-2 border-2 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 rounded-xl text-sm font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                                            >
                                                + {type.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {selectedService.sections.map((section, sIdx) => (
                                        <div key={section.id || sIdx} className="border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-purple-300 dark:hover:border-purple-700 transition-all">
                                            {/* Section Header */}
                                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 px-5 py-4 border-b-2 border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                                            <Layers className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 dark:text-white text-base">{section.title}</h4>
                                                            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-0.5">
                                                                {section.section_type} • {section.content?.length || 0} items
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => addItem(sIdx)}
                                                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl text-sm font-semibold hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg shadow-purple-500/30"
                                                        >
                                                            + Add Item
                                                        </button>
                                                        <button
                                                            onClick={() => deleteSection(sIdx)}
                                                            className="px-4 py-2 border-2 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl text-sm font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Section Settings */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Title</label>
                                                        <input
                                                            type="text"
                                                            value={section.title || ""}
                                                            onChange={(e) => updateSectionField(sIdx, "title", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Subtitle</label>
                                                        <input
                                                            type="text"
                                                            value={section.subtitle || ""}
                                                            onChange={(e) => updateSectionField(sIdx, "subtitle", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Layout Style</label>
                                                        <select
                                                            value={section.layout_style || "default"}
                                                            onChange={(e) => updateSectionField(sIdx, "layout_style", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        >
                                                            {layoutStyles.map(style => (
                                                                <option key={style.id} value={style.id}>{style.label}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Background Image</label>
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => e.target.files[0] && handleImageUpload("section_bg", e.target.files[0], sIdx)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Primary CTA Text</label>
                                                        <input
                                                            type="text"
                                                            value={section.cta_text || ""}
                                                            onChange={(e) => updateSectionField(sIdx, "cta_text", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Primary CTA Link</label>
                                                        <input
                                                            type="text"
                                                            value={section.cta_link || ""}
                                                            onChange={(e) => updateSectionField(sIdx, "cta_link", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Secondary CTA Text</label>
                                                        <input
                                                            type="text"
                                                            value={section.secondary_cta_text || ""}
                                                            onChange={(e) => updateSectionField(sIdx, "secondary_cta_text", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Secondary CTA Link</label>
                                                        <input
                                                            type="text"
                                                            value={section.secondary_cta_link || ""}
                                                            onChange={(e) => updateSectionField(sIdx, "secondary_cta_link", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Section Content Items */}
                                            <div className="p-5 space-y-3 bg-white dark:bg-gray-900">
                                                {section.content.map((item, iIdx) => (
                                                    <div key={item.tempId || item.id || iIdx} className="flex items-start gap-3 p-4 border-2 border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:border-purple-300 dark:hover:border-purple-700 transition-all">
                                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30">
                                                            <span className="text-sm font-bold text-white">{iIdx + 1}</span>
                                                        </div>

                                                        <div className="flex-1">
                                                            {section.section_type === "features" && (
                                                                <div className="grid grid-cols-12 gap-2">
                                                                    <div className="col-span-2">
                                                                        <select
                                                                            value={item.icon_name || "CheckCircle"}
                                                                            onChange={(e) => updateItem(sIdx, iIdx, "icon_name", e.target.value)}
                                                                            className="w-full px-2 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        >
                                                                            {iconOptions.map(icon => (
                                                                                <option key={icon} value={icon}>{icon}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    <input
                                                                        className="col-span-3 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.title || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "title", e.target.value)}
                                                                        placeholder="Title"
                                                                    />
                                                                    <input
                                                                        className="col-span-4 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.description || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "description", e.target.value)}
                                                                        placeholder="Description"
                                                                    />
                                                                    <input
                                                                        className="col-span-2 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.highlight || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "highlight", e.target.value)}
                                                                        placeholder="Highlight"
                                                                    />
                                                                    <div className="col-span-1">
                                                                        <input
                                                                            type="file"
                                                                            accept="image/*"
                                                                            onChange={(e) => e.target.files[0] && handleImageUpload("item_image", e.target.files[0], sIdx, iIdx)}
                                                                            className="w-full text-xs"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {["stats", "benefits"].includes(section.section_type) && (
                                                                <div className="grid grid-cols-12 gap-2">
                                                                    <div className="col-span-2">
                                                                        <select
                                                                            value={item.icon_name || "TrendingUp"}
                                                                            onChange={(e) => updateItem(sIdx, iIdx, "icon_name", e.target.value)}
                                                                            className="w-full px-2 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        >
                                                                            {iconOptions.map(icon => (
                                                                                <option key={icon} value={icon}>{icon}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    <input
                                                                        className="col-span-3 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.value || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "value", e.target.value)}
                                                                        placeholder="Value"
                                                                    />
                                                                    <input
                                                                        className="col-span-5 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.label || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "label", e.target.value)}
                                                                        placeholder="Label"
                                                                    />
                                                                    <input
                                                                        className="col-span-2 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.trend || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "trend", e.target.value)}
                                                                        placeholder="Trend"
                                                                    />
                                                                </div>
                                                            )}

                                                            {section.section_type === "process" && (
                                                                <div className="grid grid-cols-12 gap-2">
                                                                    <input
                                                                        className="col-span-1 px-2 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.step_number || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "step_number", e.target.value)}
                                                                        placeholder="#"
                                                                    />
                                                                    <div className="col-span-2">
                                                                        <select
                                                                            value={item.icon_name || "Clock"}
                                                                            onChange={(e) => updateItem(sIdx, iIdx, "icon_name", e.target.value)}
                                                                            className="w-full px-2 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        >
                                                                            {iconOptions.map(icon => (
                                                                                <option key={icon} value={icon}>{icon}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    <input
                                                                        className="col-span-3 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.title || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "title", e.target.value)}
                                                                        placeholder="Title"
                                                                    />
                                                                    <input
                                                                        className="col-span-4 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.description || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "description", e.target.value)}
                                                                        placeholder="Description"
                                                                    />
                                                                    <input
                                                                        className="col-span-1 px-2 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.stats || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "stats", e.target.value)}
                                                                        placeholder="Stats"
                                                                    />
                                                                    <div className="col-span-1">
                                                                        <input
                                                                            type="file"
                                                                            accept="image/*"
                                                                            onChange={(e) => e.target.files[0] && handleImageUpload("item_image", e.target.files[0], sIdx, iIdx)}
                                                                            className="w-full text-xs"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {["industries", "technologies"].includes(section.section_type) && (
                                                                <div className="grid grid-cols-12 gap-2">
                                                                    <div className="col-span-2">
                                                                        <select
                                                                            value={item.icon_name || "Globe"}
                                                                            onChange={(e) => updateItem(sIdx, iIdx, "icon_name", e.target.value)}
                                                                            className="w-full px-2 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        >
                                                                            {iconOptions.map(icon => (
                                                                                <option key={icon} value={icon}>{icon}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    <input
                                                                        className="col-span-3 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.title || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "title", e.target.value)}
                                                                        placeholder="Title"
                                                                    />
                                                                    <input
                                                                        className="col-span-3 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.description || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "description", e.target.value)}
                                                                        placeholder="Description"
                                                                    />
                                                                    <input
                                                                        className="col-span-2 px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.stats || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "stats", e.target.value)}
                                                                        placeholder="Stats"
                                                                    />
                                                                    <input
                                                                        className="col-span-1 px-2 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.link || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "link", e.target.value)}
                                                                        placeholder="Link"
                                                                    />
                                                                    <div className="col-span-1 flex gap-1">
                                                                        <input
                                                                            type="color"
                                                                            value={item.color_from || colorPalette.primary}
                                                                            onChange={(e) => updateItem(sIdx, iIdx, "color_from", e.target.value)}
                                                                            className="w-8 h-8 rounded cursor-pointer"
                                                                        />
                                                                        <input
                                                                            type="color"
                                                                            value={item.color_to || colorPalette.accent}
                                                                            onChange={(e) => updateItem(sIdx, iIdx, "color_to", e.target.value)}
                                                                            className="w-8 h-8 rounded cursor-pointer"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {section.section_type === "faq" && (
                                                                <div className="space-y-2">
                                                                    <input
                                                                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                                        value={item.question || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "question", e.target.value)}
                                                                        placeholder="Question"
                                                                    />
                                                                    <textarea
                                                                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                                                        value={item.answer || ""}
                                                                        onChange={(e) => updateItem(sIdx, iIdx, "answer", e.target.value)}
                                                                        placeholder="Answer"
                                                                        rows={2}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>

                                                        <button
                                                            onClick={() => deleteItem(sIdx, iIdx)}
                                                            className="p-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all shrink-0 border-2 border-red-200 dark:border-red-800"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (

                    /* Media Tab */
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                        <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6 flex items-center gap-2">
                            <ImageIcon className="w-6 h-6 text-purple-600" />
                            Media Gallery
                        </h3>

                        {/* Add Media */}
                        <div className="mb-8 p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:border-purple-400 dark:hover:border-purple-600 transition-all">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-base">Add Media Files</h4>
                            <div className="flex items-center gap-3">
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    multiple
                                    onChange={(e) => {
                                        Array.from(e.target.files).forEach(file => addMediaFile(file))
                                    }}
                                    className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 transition-all"
                                />
                                <button
                                    onClick={() => document.querySelector('input[type="file"]').click()}
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all font-semibold shadow-lg shadow-purple-500/30"
                                >
                                    Upload
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 flex items-center gap-2">
                                <ImageIcon className="w-4 h-4" />
                                Upload images or videos for this service. Files will be saved to service_media table.
                            </p>
                        </div>

                        {/* Media Grid */}
                        {mediaFiles.length > 0 && (
                            <div className="space-y-5">
                                <h4 className="font-semibold text-gray-900 dark:text-white text-base">New Media Files ({mediaFiles.length})</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {mediaFiles.map((media, index) => (
                                        <div key={media.id} className="border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-sm hover:shadow-md">
                                            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                                                {media.media_type === 'image' ? (
                                                    <img
                                                        src={media.preview}
                                                        alt="Preview"
                                                        className="max-h-full max-w-full object-contain"
                                                    />
                                                ) : (
                                                    <div className="text-center">
                                                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                                            <ImageIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                                                        </div>
                                                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Video File</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-5 bg-white dark:bg-gray-900">
                                                <div className="space-y-3">
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Alt Text</label>
                                                        <input
                                                            type="text"
                                                            value={media.alt_text}
                                                            onChange={(e) => updateMediaField(index, "alt_text", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                            placeholder="Image description"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Caption</label>
                                                        <input
                                                            type="text"
                                                            value={media.caption}
                                                            onChange={(e) => updateMediaField(index, "caption", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                            placeholder="Optional caption"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Media Type</label>
                                                        <select
                                                            value={media.media_type}
                                                            onChange={(e) => updateMediaField(index, "media_type", e.target.value)}
                                                            className="w-full px-3 py-2 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                        >
                                                            <option value="image">Image</option>
                                                            <option value="video">Video</option>
                                                        </select>
                                                    </div>
                                                    <button
                                                        onClick={() => removeMediaFile(index)}
                                                        className="w-full px-4 py-2.5 border-2 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl text-sm font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-8 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl">
                            <p className="text-sm text-blue-900 dark:text-blue-300 font-medium">
                                <strong className="font-bold">Note:</strong> Media files uploaded here will be saved to the service_media table with columns:
                                id, service_id, public_id, url, media_type, alt_text, caption, created_at
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
