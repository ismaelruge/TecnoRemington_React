import React, { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        const loadChatbot = () => {
            // Limpiar cualquier instancia anterior
            if (window.Botsonic) {
                delete window.Botsonic;
            }

            const script = document.createElement('script');
            script.src = 'https://widget.botsonic.com/CDN/botsonic.min.js';
            script.async = true;

            script.onload = () => {
                console.log('Botsonic script loaded'); // Agrega este log
                if (typeof window.Botsonic === 'function') {
                    window.Botsonic("init", {
                        serviceBaseUrl: "https://api-azure.botsonic.ai",
                        token: "a57ffab7-633f-486b-8ac2-9e6074f9f8a6",
                    });
                } else {
                    console.error('Botsonic no está definido correctamente.');
                }
            };

            script.onerror = () => {
                console.error('Error al cargar el script del chatbot');
            };

            document.body.appendChild(script);
        };

        loadChatbot();

        // Limpiar el script al desmontar
        return () => {
            const scriptTags = document.querySelectorAll('script[src="https://widget.botsonic.com/CDN/botsonic.min.js"]');
            scriptTags.forEach((script) => {
                script.parentNode.removeChild(script);
            });
            // Limpiar Botsonic al desmontar
            if (window.Botsonic) {
                delete window.Botsonic;
            }
        };
    }, []);

    return (
        <div>
            {/* Aquí puedes agregar cualquier otro contenido que desees mostrar junto al chatbot */}
        </div>
    );
};

export default Chatbot;
