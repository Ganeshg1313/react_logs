const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRIT_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRIT_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRIT_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRIT_BUCKET_ID)
}

export default conf