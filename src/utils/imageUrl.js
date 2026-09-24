const images = import.meta.glob('../assets/images/*', { eager: true, import: 'default' });

export function getImageUrl(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
        return path;
    }
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const filename = cleanPath.replace(/^images\//, '');
    const key = `../assets/images/${filename}`;
    
    return images[key] || cleanPath;
}
