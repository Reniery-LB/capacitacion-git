/**
 * Homer's Donut Shop - Main Application
 * Git Training - Unidad III
 *
 * Este archivo demuestra la estructura básica
 * de una aplicación JavaScript.
 */

// Configuración de la aplicación
const APP_CONFIG = {
    name: "Homer's Donut Shop",
    version: '1.0.0',
    debug: true
};

// Función principal de inicio
function init() {
    log('🍩 Welcome to ' + APP_CONFIG.name);
    log('📚 Version: ' + APP_CONFIG.version);
    log('');
    log('💡 Tip: Open index.html in your browser!');
}

// Función de logging (solo si debug está activo)
function log(message) {
    if (APP_CONFIG.debug) {
        console.log('[HomerApp]:', message);
    }
}

// Utilidad: Formatear nombre de usuario
function formatUserName(firstName, lastName) {
    return `${firstName} ${lastName}`.trim();
}

// Utilidad: Validar email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Clase para representar un Donut
class Donut {
    constructor(flavor, sprinkles = true) {
        this.flavor = flavor;
        this.sprinkles = sprinkles;
        this.eaten = false;
    }

    eat() {
        if (this.eaten) {
            log('🍩 This donut was already eaten!');
            return false;
        }
        this.eaten = true;
        log(`🍩 Yum! Ate a ${this.flavor} donut!`);
        return true;
    }

    describe() {
        const sprinklesText = this.sprinkles ? 'with sprinkles' : 'no sprinkles';
        return `🍩 ${this.flavor} donut ${sprinklesText}`;
    }
}

// Clase para gestionar el equipo
class TeamManager {
    constructor() {
        this.members = [];
    }

    addMember(name, role = 'Developer') {
        const member = { name, role, joinedAt: new Date() };
        this.members.push(member);
        log(`✅ Added ${name} as ${role}`);
        return member;
    }

    listMembers() {
        log('👥 Team Members:');
        this.members.forEach((member, index) => {
            log(`   ${index + 1}. ${member.name} - ${member.role}`);
        });
    }

    getMemberCount() {
        return this.members.length;
    }
}

// Ejecutar inicialización
init();

// Exportar para uso en consola del navegador
if (typeof window !== 'undefined') {
    window.Donut = Donut;
    window.TeamManager = TeamManager;
    window.formatUserName = formatUserName;
    window.isValidEmail = isValidEmail;
}
