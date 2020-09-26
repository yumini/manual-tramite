module.exports = {
    title: 'MDNR',
    description: 'Sistema de Trámite Documentario de la Municipalidad Distrital de Nueva Requena',
    themeConfig: {
        search: false,
        searchMaxSuggestions: 10,
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Reg. Tramite', link: '/registroTramite/' },
          { text: 'Reg. Evento', link: '/registroEvento/' },
          { text: 'Reg. Usuario', link: '/registroUsuario/' },
          { text: 'Reg. Rol Usuario', link: '/registroRolUsuario/' },
          { text: 'Reg. Tipo Doc.', link: '/registroTipoDocumento/' },
          { text: 'Reg. Área/Oficina', link: '/registroArea/' },
          { text: 'Reg. Acción/Evento', link: '/registroAccion/' }
        ],
        sidebar: {
            '/registroTramite/': [
              ''
            ],
            '/registroEvento/': [
              ''
            ],
            '/registroUsuario/': [
              ''
            ],
            '/registroRolUsuario/': [
              ''
            ],
            '/registroTipoDocumento/': [
              ''
            ],
            '/registroArea/': [
              ''
            ],
            '/registroAccion/': [
              ''
            ]
        },
        publicPath: process.env.NODE_ENV === 'production'
        ? '/manual_tramite/'
        : '/'
    }
  }