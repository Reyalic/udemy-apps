

export const fileUpload = async (file) => {

    if(!file) throw new Error("No files available for upload")

    const Url = "https://api.cloudinary.com/v1_1/dmsiu89od/upload"

    const formData = new FormData()
    formData.append("upload_preset", "react-journal")
    formData.append("file", file)

    try {

        const res = await fetch(Url, {
            method: "POST",
            body: formData
        })

        if (!res.ok) throw new Error("Failed to upload image")

        const cloudRes = await res.json()

        return cloudRes.secure_url

    } catch (err) {
        throw new Error(err.message)
    }
}