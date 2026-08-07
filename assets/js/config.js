/**
 * CONFIGURACIÓN - Farmacia Bolaños (versión GitHub Pages)
 * Equivalente a config/config.php de la versión PHP
 */

const CONFIG = {
    SHEET_ID: '1VDx3-mOKyWxYUHbJ13CgBcJcBK0-_4KsMLSJhy3yOXQ',
    GID_OLIMPO: '1328512039',
    GID_USUARIOS: '138385541',
    GID_INVENTARIO_MER: '1290916129',
    GID_INVENTARIO_FAR: '1929739320',
    WEBAPP_URL: 'https://script.google.com/macros/s/AKfycbyUeqSKgnbFImR8BzhGLH007dTnAShbwvjKGO6XcvuSEX6LaxUGhptAwHZYONacYebINw/exec',
    
    // Rutas relativas (GitHub Pages sirve todo desde la raíz del repo)
    BASE_URL: '.',
    
    // Caché en localStorage, en segundos (igual que hacía PHP con archivos)
    CACHE_TTL_OLIMPO: 20,
    CACHE_TTL_USUARIOS: 30,
    CACHE_TTL_CONTEOS: 30,
};
