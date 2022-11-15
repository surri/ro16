import { Dictionary } from './types'

export const DICTIONARIES: Record<string, Dictionary> = {
    default: {
        title: 'World cup Round of 16',
        greet:
      'Hello!, we could not detect your locale so we defaulted to english.',
        subtitle: 'Localized text based on geolocation headers',
        link: 'See headers documentation',
    },
    kr: {
        title: '월드컵 16강 계산기',
        greet: '안녕하세요!',
        subtitle: '지리적 위치 헤더를 기반으로 한 로컬화된 텍스트',
        link: '헤더 문서보기',
    },
    en: {
        title: 'World cup Round of 16',
        greet: 'Hello!',
        subtitle: 'Localized text based on geolocation headers',
        link: 'See headers documentation',
    },
    es: {
        title: 'Copa Mundial Octavos De Final',
        greet: '¡Hola!',
        subtitle: 'Texto localizado basado en las cabeceras de geolocalización',
        link: 'Ver la documentación de las cabeceras',
    },
    fr: {
        title: 'Coupe du monde 16es de finale',
        greet: 'Bonjour!',
        subtitle: 'Texte localisé basé sur les en-têtes de géolocalisation',
        link: 'Voir la documentation des en-têtes',
    },
    cn: {
        title: '世界杯16强',
        greet: '你好!',
        subtitle: '基于地理位置标题的本地化文本',
        link: '请参阅标题文档',
    },
    jp: {
        title: 'ワールドカップ 16強',
        greet: '你好!',
        subtitle: '基于地理位置标题的本地化文本',
        link: '请参阅标题文档',
    },
}