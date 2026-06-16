import type {Project} from '../types'

//AllDigital y Yandex
import YandexPre1 from '../assets/Alldigital y Yandex ADS/preprocess.png'
import YandexPre2 from '../assets/Alldigital y Yandex ADS/preprocess2.png'
import YandexPro1 from '../assets/Alldigital y Yandex ADS/process.png'
import YandexPro2 from '../assets/Alldigital y Yandex ADS/process2.png'
import YandexPost from '../assets/Alldigital y Yandex ADS/postprocess.png'

//Big Commerce
import BigPre from '../assets/Big/preprocess.png'
import BigPro1 from '../assets/Big/process1.png'
import BigPro3 from '../assets/Big/process2.png'
import BigPro2 from '../assets/Big/process3.png'
import BigPost from '../assets/Big/postprocess.png'

//Cantar un velero
import CantarPre1 from '../assets/Cantar/preprocess1.png'
import CantarPre2 from '../assets/Cantar/preprocess2.png'
import CantarPro1 from '../assets/Cantar/process1.png'
import CantarPro2 from '../assets/Cantar/process2.png'
import CantarPost from '../assets/Cantar/postprocess.png'

//Couch Gag
import simpsonReference from '../assets/couch/simpson_reference.jpg'
import modernReference from '../assets/couch/modern_reference.jpg'
import CouchPro1 from '../assets/couch/process1.png'
import CouchPro2 from '../assets/couch/process2.png'
import CouchPro3 from '../assets/couch/process3.png'
import CouchPost from '../assets/couch/postprocess.png'

//cys
import cysPre1 from '../assets/cys/preprocess1.png'
import cysPre2 from '../assets/cys/preprocess2.png'
import cysPre3 from '../assets/cys/preprocess3.png'
import cysPro1 from '../assets/cys/process1.png'
import cysPro2 from '../assets/cys/process2.png'
import cysPost from '../assets/cys/postprocess.png'

//deraiz
import deraizPre1 from '../assets/deraiz/preprocess1.png'
import deraizPre2 from '../assets/deraiz/preprocess2.png'
import deraizPre3 from '../assets/deraiz/preprocess3.png'
import deraizPro1 from '../assets/deraiz/process1.png'
import deraizPro2 from '../assets/deraiz/process2.jpg'
import deraizPro3 from '../assets/deraiz/process3.jpg'
import deraizPost from '../assets/deraiz/postprocess1.png'

//Ihand
import handPre from '../assets/Ihand/preprocess.png'
import handPro from '../assets/Ihand/process.png'
import handPost from '../assets/Ihand/postprocess.png'

//Kommo
import kommoPre from '../assets/kommo/preprocess.png'
import kommoPro from '../assets/kommo/process.png'
import kommoPost from '../assets/kommo/postprocess.png'

//preicfes
import preicfesPre from '../assets/preicfes/preprocess.png'
import preicfesPro from '../assets/preicfes/process.jpg'
import preicfesPost from '../assets/preicfes/postprocess.png'

//rubix
import rubixPre from '../assets/rubix/preprocess.png'
import rubixPro from '../assets/rubix/process.png'
import rubixPost from '../assets/rubix/postprocess.png'

//Samurai
import samuraiPre from '../assets/samurai/preprocess.jpg'
import samuraiPro from '../assets/samurai/process.png'
import samuraiPost from '../assets/samurai/postprocess.png'

//Spiderman
import SpidermanPre from '../assets/Spiderman/preprocess.png'
import SpidermanPro1 from '../assets/Spiderman/process1.png'
import SpidermanPro2 from '../assets/Spiderman/process2.png'
import SpidermanPost from '../assets/Spiderman/postprocess1.png'

export const AnimationProjects: Project[] = [
    {
        id: 'p1',
        title: 'La Familia Amarilla sin derechos de autor',
        description:
            'Este proyecto, inspirado en el formato "Couch Gag", fusiona las introducciones de dos series de la antigua cadena FOX. Fue realizado únicamente con fines académicos y sin fines comerciales.\n' +
            '\n' +
            'La animación fue desarrollada a lo largo de dos semanas con Adobe Photoshop y Adobe After Effects, como parte de un ejercicio práctico de animación y experimentación creativa.',
        iframeSrc: 'https://www.youtube.com/embed/ffGX5rWSqyM',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto del projecto",
                    description: ["Este es un projecto de 2 semanas, el cual tenia el desafio de combinar dos intros de series conocidas. Debido a este, el desarrollo de este elemento se concentra en experimentar con la animacion, mostrando el potencial visual.",
                        "Mi objetivo principal era intentar aplicar el diseño original del estilo artistico de 'Los Simpson' al mismo tiempo que poder concervar el rimto accelerado de modern family.",
                        'Despues de una lluvia de idea, pude desarrollar mas a fondo el concepto para poder empezar la animación', 'Referencias:',
                        'Groening, M. (Creador). (1989–presente). The Simpsons [Serie de televisión].',
                        'Levitan, S., & Lloyd, C. (Creadores). (2009–2020). Modern Family [Serie de televisión].'],
                    media: [simpsonReference, modernReference],
                },
                production: {
                    title: "La producción actual",
                    description: ["El processo en si se divido en tres secciones: creación de fondos, animación tradicional y la animación vectorial.",
                        'En primera instancia, la creación de fondos, la cual se refiere a todas las escenas que despues se animarian de forma vectorial con Adobe After Effects. Esto incluyendo las imagenes del abuelo y de las tias.' ,
                        'Dentro de la animación vectorial, me enfoque en un estilo "In between", donde sub dividi cada frame a la mitad, con el fin de poder hacer el movimiento de la familia sentandose lo mas fluido posible.',
                        'Finalmente, la animación vectorial une los clips animados tradicionalmente con loas imagenes estaticas de los fondos. Al mismo tiempo, se configura la linea de tiempo para que esta tengan ese alejamiento progresivo. Para este proceso era importante que las imagenes fueran vectores graficos, para que no cambiara la calidad de la misma durante el proceso.'],
                    media: [CouchPro1, CouchPro2, CouchPro3],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ["Dentro del desarrollo del projecto, no se genera unicamente unicamente la animación, sino que la totalidad de la hisotira que se quiere contar.",
                        "Por ende, durante esta etapa se agregan sonidos, se pullen detalles, se revisa que todo este en su lugar.", "Todo con el objetivo de concluir el projecto de la mejor manera possible"],
                    media: [CouchPost],
                },
            },
            sectionFooter: "Este projecto no infrinje ningun derecho de autor y le da el credito del concepto original a sus respectivos autores.",
        }
    },
    {
        id: 'p2',
        title: 'Experimento de Rotoscopia',
        description:
            'Este experimento fue desarrollado utilizando la técnica de rotoscopia en Adobe Photoshop, con el objetivo de practicar animación sobre material de archivo.\n' +
            '\n' +
            'Se trabajó a partir de clips de "Spider-Man 3" únicamente con fines educativos y sin fines comerciales. El proyecto fue realizado en una semana como ejercicio de práctica y experimentación técnica.',
        iframeSrc: 'https://www.youtube.com/embed/bazyWtN-WX0',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Conceptos iniciales",
                    description: ["Este fue un ejercicio de corto tiempo, el cual tenia el objetivo de afectar artisticamente un clip de material ya exsistente con el fin de darle un nuevo significado.","Debido a que este tenia un proposito breve y unicamente experimental, la idea no era tanto la planificaicón sino entender la ejecución.",
                        "Referencias",
                        "Raimi, S. (Director). (2007). Spider-Man 3 [Film].",
                        "Tesfaye, A. (2019). Blinding Lights [Canción]. En After Hours. XO Records; Republic Records."],
                    media: [SpidermanPre],
                },
                production: {
                    title: "Proceso de creación",
                    description: ["La idea inicial era simplemente hacer un trazo por frame, donde cada uno tuviera un color diferente.",
                        "Por ende, el proceso del mismo se enfocaba en usar un seguimiento 'Frame to frame' con el fin de tener las aciones tan unificadas poisble.",
                        "Tambien cabe resaltar que la animación esta divida entre personajes, fondos, y efectos los cuales tambien se subdividen dentro de animación lineart y de coloreado."],
                    media: [SpidermanPro1, SpidermanPro2],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ["Ya dentro de este ultimo proceso es poder usar premiere y after effects para mejorar la animación, crear el efecto de desfase, y encajar las diferentes capas.",
                        "Tambien retocar el audio y agregar los detalles finales del texto para darle un poco mas de contexto."],
                    media: [SpidermanPost],
                },
            },
            sectionFooter: "Este projecto no infrinje ningun derecho de autor y le da el credito del concepto original a sus respectivos autores.",
        }
    },
    {
        id: 'p3',
        title: 'Deraíz',
        description:
            'Este es un proyecto que hice en colaboración con la Universidad de los Andes. Este tenía el propósito de generar un movimiento artístico de expresión visual, combinando técnicas análogas y digitales. Este fue un trabajo en equipo donde todos teníamos una meta en común y nos organizamos para generar este proyecto. La animación fue hecha en espacios autorizados con grafiti y uniendo todo en Photoshop. Aquí se encuentra la publicación original: ',
        iframeSrc: 'https://drive.google.com/file/d/101m-0jSkYCH9VfXZf97SYLNLjBeLZI6Z/preview',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://www.instagram.com/reel/DKHhPdvN8NO/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Planeación del projecto",
                    description: ["Este es facilmente uno de los projectos mas ambisiosos en los que he tenido la oportunidad de trabajar",
                        'Durante este, primero tuvimos el concepto inicial de generar una animación a base de dos ideales opuestos; en este caso, la naturaleza y la industrialización.',
                        'Tambien queriamos generar una disrupción del sistema, poder generar im impacto del cual se pudiera generar en el espacio publico', 'De ahi el concepto del graffiti y del arte del muralismo.',
                        'Posterior a este, como era un trabajo en conjunto, nos decidimos a dividir el projecto, cada uno haciendo una pequeña parte de este, para al final unirlo todo en el projecto final.',
                        'la idea are generar un diseño, el cual conectaria con el de otra persona, haciendo un "Cadaver Esquicito" de la animación.',
                        'Esto incluye hacer pruebas, prototipos, y ensayos de manera digital antes del dia de producción.'],
                    media: [deraizPre1, deraizPre2, deraizPre3],
                },
                production: {
                    title: 'Los dias de "Animación"',
                    description: ["Como tal, el proceso se divido en dos fechas: El dia del graffiti y el dia de la conexión.",
                        'El dia del grafiti, todos nos encontramos en un espacio ya acordado, donde pintabamos en analogo cada uno de los frames, para despues poder tomar las respectivas fotos.',
                        'Debido a la logica del proceso, si o si tocaba animarlo frame by frame, esto con el fin de poder probar ahi mismo que la fluidez era adecuada.',
                        'Esto se hizo en conjunto con el fin de poder ayudarnos entre nosotros.',
                        'La segunda parte del proceso consistia en unir las fotos dentro del video de cada uno.',
                        'para esto ocupamos photoshop con el fin de poder ajustar las imagenes correctamente, al igual que poder corregir cualquier hueco generado por la camada al hacer coincidir la matriz.',
                        'Esto a traves de puntos de referncia que teniamos puetos en cada frame, para asegurarnos de no dañar la escala en si.',
                        'ACLARACIÓN:',
                        'Los espacios utilizados para este proceso fueron autorizados para el mismo. Agradecimientos a La Universidad de los Andes por permitirmos este espacio.'],
                    media: [deraizPro1, deraizPro2, deraizPro3],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ["Dentro de este proceso, teniamos un administrador del projecto, el cual estaria encargado de unir todas las piezas en su totalidad.",
                        'Por ende, como ninguna de las piezas podia faltar, el trabajo en equipo era indispensable.',
                        'Todos nos comprometimos a completar y a enviar nuestros clips, los cuales se reflejaron en el producto final.',
                        'Otra compañera estuvo acargo de generar el audio, concluyendo este projecto'],
                    media: [deraizPost],
                },
            },
            sectionFooter: "Agradecimentos especiales a La Universidad de los Andes por este projecto.",
        }
    },
    {
        id: 'p4',
        title: 'Camilo y Sofía',
        description:
            'Este es un cortometraje que escribí, produje, dirigí y edité en 2025. Su desarrollo fue un proceso de aproximadamente dos meses, durante los cuales estuve a cargo de la planeación integral del proyecto, la escritura del guion, la organización del casting y todo el proceso de postproducción.\n' +
            '\n' +
            'La realización contó con el apoyo de un asistente de producción, dos actores principales y ocho actores de reparto, consolidando un trabajo colaborativo que permitió materializar la propuesta audiovisual.\n' +
            '\n' +
            'La edición fue realizada en Adobe Premiere Pro, en conjunto con Universidad de los Andes, como parte de un proceso de creación y producción audiovisual que integró dirección, narrativa y ejecución técnica.',
        iframeSrc: 'https://drive.google.com/file/d/1WwlQynzBXN-HRBTu0O6hgMcyh3UD2hig/preview',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Storyboard y preproducción",
                    description: ["Dentro de la creación de este projecto, queria contar une historia a partir de una anecdota, creada dentro de la cotidianidad y reflejada en la realidad.",
                        'El concepto original era tomar una idea como la de un mesero peleando con un cliente, y de ahi empezar a tejer la historia',
                        'Creando un storyboard y un guion, empeze a generar la narrativa del cuento, con el fin de poder mostrar de manera efectiva el contraste entre dos personajes que pudieran ser totalmente disparejos.',
                        'A la par de esto, tambien fui buscando lugares de grabación, hablando con actores y haciendo prebas de equipo para decidir que elementos usar dentro de mi cortometraje.',
                        'Referencias:',
                        'Sting. (1987). Englishman in New York [Canción]. En ...Nothing Like the Sun. A&M Records.'],
                    media: [cysPre1, cysPre2, cysPre3],
                },
                production: {
                    title: 'Rodaje y producción',
                    description: ["Este projecto lo que fue en total de una semana de rodaje, entre tomas de escenas principales y retomas necesarias",
                        'Todo esto registrado bajo un plan de rodaje muy rigido, debido a que el dueño del restaurante no queria peder posibles cleintes a las horas de grabar, por lo que teniamos pocas horas de grabar al dia.',
                        'Todo esto con ayuda de mi asistente de produción, los actores y las actrizes que me ayudaron, y tambien el dueño del restaurante.'],
                    media: [cysPro1, cysPro2],
                },
                postproduction: {
                    title: "Montaje y post producción",
                    description: ["Ya dentro de la parte final es principalmente unir los clips dentro del montaje.",
                        'Todo esto incluyendo tambien el retoque para el audio, para la imagen, e incorporar los debidos graficos visuales y titulos'],
                    media: [cysPost],
                },
            },
            sectionFooter: 'Agradecimientos espericales al restaurante "La esquina Vegetariana" y a La universidad de los Andes' ,
        }
    },
    {
        id: 'p5',
        title: 'Experimento del Cubo Rubik',
        description:
            'Este es un experimento corto que hice con animación de rotoscopia usando Photoshop (sonido externo sin derechos de autor).',
        iframeSrc: 'https://www.youtube.com/embed/8fDgl2y5pW4?si=G0diJ7Bx9-Kbe3uO',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto inicial",
                    description: ["Este fue un experimento mas simple para probar un enfoque diferente con la rotoscopia.",
                        'El objetivo era simple, tomar un video y cambiar como este se presentaba con la rotoscopia.'],
                    media: [rubixPre],
                },
                production: {
                    title: "Durante la producción",
                    description: ["La animación fue muy sencilla, primero el lineart, luego el relleno.",
                        'Dentro de un concepto inicial tenia pensado tambien incluir las manos.',
                        'Si alcanze a terminar el lineart de este, pero me di cuenta que el concepto seria mucho mas interesante si el cubo tuviera ese movimiento de manera propia.'],
                    media: [rubixPro],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ['Ya la post producción se enfoco principalmente en el desarrollo del movmiento aparte y de que todo funcionara.',
                        'Ademas de agregarle un audio generico.'],
                    media: [rubixPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p6',
        title: 'Ihand',
        description:
            'Este es un corto proyecto estilo comercial, el cual replica el estilo de anuncios de marcas tecnológicas. Este promociona el producto ficticio "Ihand", el cual sería un teléfono insertado en la mano. Este se hizo con Adobe Premiere Pro, sin fines de lucro y únicamente con el propósito de aprender. Todo el material usado es libre de derechos de autor.',
        iframeSrc: 'https://drive.google.com/file/d/1_-sBUPp8M_1wnphZo3tSKYjp-P9vuXXH/preview',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Idea original",
                    description: ["El concepto de este projecto era hacer un comercial de un producto no exsistente, basado en otras marcas", 'en este caso, la inspiración principal siendo apple y su estilo tan caracteristico.'],
                    media: [handPre],
                },
                production: {
                    title: "Producción",
                    description: ["Este fue principalmente un ejericicio de montaje rapido.",
                        'Esto usando material de archivo y sonido sin derechos de autor.'],
                    media: [handPro],
                },
                postproduction: {
                    title: "Detalles",
                    description: ["Ya los ultimos detalles consistian en pulir y ajustar todo para que quedara lo mas parecido posible."],
                    media: [handPost],
                },
            },
            sectionFooter: "Todos los clips son de dominio publico, al igual que el sonido.",
        }
    },
    {
        id: 'p7',
        title: 'All Digital Media & Kommo',
        description:
            'Este es un reel en el cual ayudé a traducir el contenido, dado que el idioma original era inglés. También modifiqué los datos del final del video para que encajaran con la empresa "All Digital Media". Este cambio fue hecho con Adobe Premiere Pro.',
        iframeSrc: 'https://youtube.com/embed/1WuCEfHVqKE?si=Cb7EJZq1qPUohQoi',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Antes de comenzar",
                    description: ["Este es un trabajo de re edición, por lo que la mayoria del material ya exsiste, por lo que en este pedazo es solo perfilar que tiene que cambiarse."],
                    media: [kommoPre],
                },
                production: {
                    title: "La producción en si",
                    description: ["El proceso de edición fue un poco mas sencillo.", 'Me enfoque simplemente en poder traducir los elementos del idioma y agregar los titulos necesarios.'],
                    media: [kommoPro],
                },
                postproduction: {
                    title: "Revision",
                    description: ["Ya por parte de la producción es simplemente revisar detalles y retocar.",
                        'El caso mas notorio es para actualizar la información de contacto, ya que esta dependia del mismo systema.'],
                    media: [kommoPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p8',
        title: 'All Digital Media & Big Commerce',
        description:
            'Este es un reel en el cual ayudé a traducir el contenido, dado que el idioma original era inglés. También modifiqué los datos del final del video para que encajaran con la empresa "All Digital Media", donde ajusté la transición final en la que se muestran los datos de la compañía y el logo. Esto fue hecho con Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/Bmp48LleZ0E?si=LhpADvwiw_JX4yf-',
        section: '2023',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Antes de comenzar",
                    description: ["El proceso antes de iniciar era principalmente analizar el video y ver que tenia que cambiar.",
                        'Asi mismo, tambien era conseguir los elementos necesarios.'],
                    media: [BigPre],
                },
                production: {
                    title: "Producción como tal",
                    description: ["Dentro del projecto en si en terminos de textos era simplemente agregar los nuevos logos", 'Sin embargo, lo mas llamativo de este es que me pidieron una version fluida y mas corta del projecto.',
                        ' muchas secciones me toco crear trasnciones desde 0 he integrarlas de manera dinamica.',
                        'Esto tanto para el audio como para el video en si.'],
                    media: [BigPro1, BigPro2, BigPro3],
                },
                postproduction: {
                    title: "Revision final",
                    description: ["Despues de eso, el proceso se concentra en revisar con el cliente que los datos esten aplicados correctamente y que no se encuentren errores."],
                    media: [BigPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p9',
        title: 'Pre Icfes Con Estilo',
        description:
            'Este es un comercial para la institución "Pre Icfes con Estilo", en el cual fui director. Nuestro propósito aquí fue principalmente producir este anuncio tanto para mostrarlo como comercial de YouTube, como también video de introducción para la plataforma institucional. Aquí nos dieron algo de material de archivo, pero el 90% fue grabado y producido por nuestro equipo, el cual estaba conformado por una cinematógrafa, un editor y yo como director.',
        iframeSrc: 'https://www.youtube.com/embed/NBRRBUN4RIo?si=gGZIcidqop_jK5Q7',
        section: '2023',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Planificaicón y preparación",
                    description: ["Este projecto en general fue hecho con el fin de presentar una pauta explicativa para la marca de PreIcfes con estilo, un programa de preparación para los examenes gubernamentales.",
                        'Esto fue hecho con unas bases de marca ya preestablecidos, los cuales teniamos que seguir durante la planificaicón del video y del guion.',
                        'Asi mismo, era necesario poder confirmar que estuvieran disponibles todas las locaciones necesarias para grabar, al igual que contar con los actores y el equipo necesario.'],
                    media: [preicfesPre],
                },
                production: {
                    title: "Los dias de grbación",
                    description: ["Contabamos con 4 dias para grabar, por lo que cada rodaje cuenta.",
                        'Tuvimos mutiples tomas, con differentes angulos y en diferentes espacios prestados por la universidad, los cuales nos permitieron obtener mucho material para elegir.',
                        'Nuestro enfoque principal era grabar el audio de manera correcta, al punto que tuvimos una mayor cantidad de archivos de audio de que de video, para que se escuchara lo mejor possible.'],
                    media: [preicfesPro],
                },
                postproduction: {
                    title: "Material adicional",
                    description: ["Finalmente, necesitabamos los clips de la plataforma oficial, con el fin de poder mostrar a detalle todas las herramientas disponibles.",
                        'Esto se logro grabando la pantalla y usando un amuse animado para darle mejor despliegue.'],
                    media: [preicfesPost],
                },
            },
            sectionFooter: "Cliente principal, PreIcfes con estilo. Cliente subsecuente, la universidad de los Andes.",
        }
    },
    {
        id: 'p10',
        title: 'Cantar un Velero',
        description:
            'Cortometraje realizado junto a un equipo de tres personas, en el que asumí la dirección y participé activamente en la construcción del guion y la producción.\n' +
            '\n' +
            'La obra presenta la historia de un humilde creador de velas que busca reencontrarse emocionalmente con su hijo, a través de una narrativa íntima que explora la conexión humana y la reconciliación.\n' +
            '\n' +
            'Fue producido en colaboración con Universidad de los Andes.',
        iframeSrc: 'https://www.youtube.com/embed/rDiEsuEZWrU?si=6IV62kOXw4F4L1N_',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Preproducción",
                    description: ["Para este projecto teniamos que explorar la vida de un personaje y de ahi experimentar para sacar un cortometraje.",
                        'Debido a esto, estuvimos entrevistando y conociendo a personas por semanas.',
                        'Esto hasta llegar a nuestro personaje "Alejandro", quien muestra una vida muy humilde haciendo velas.',
                        'Como esta primera instancia era de experimentación, se grabo mucho material que no termino en el corto final con diferentes posibilidades del desarrollo.',
                        'Sin embargo, esto no significa que no tuvieramos un guion. Empezabamos a generar una estructora con base a las partes que si y no funicionaran.'],
                    media: [CantarPre1, CantarPre2],
                },
                production: {
                    title: "Rodando la historia en si",
                    description: ["Dentro de los dias de grabación, ya teniamos que disponer era del tiempo de Alejandro en el taller.",
                        'Los clips de el dentro del taller no eran problema, ya que se grababa su dia a dia.',
                        'Sin embargo, ya pedirle que saliera a otros espacios costaba mas trabajo.',
                        'Llego un punto donde no quiso grabar mas y nos tuvimos que limitar al material que teniamos.',
                        'Debido a esto, incluso agregamos clips de personajes alternos para complementar la narrativa.'],
                    media: [CantarPro1, CantarPro2],
                },
                postproduction: {
                    title: "Ajustes Finales",
                    description: ["Dentro de la post producción, con el equipo decidimos cambiar de angulo y enfocarnos mas en el hijo, usando el mismo estilo de clips",
                        'Adicionalmente, tambien teniamos que retocar la luz, pulir el audio, y hacer que todo se viera lo mejor posible para la fecha final.'],
                    media: [CantarPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p11',
        title: 'Pirata vs Samurai',
        description:
            'Este es un proyecto de rotoscopia en el cual quise experimentar y fue una de mis primeras veces usando Adobe Photoshop. Este fue hecho usando dicho programa en combinación con Adobe Premiere Pro. El sonido fue de stock y me demoré 2 semanas en producirlo entre grabar los fotogramas originales, hacer la rotoscopia y la postproducción.',
        iframeSrc: 'https://www.youtube.com/embed/QvqdybkfV2g?si=iCi8a9ctJ5-mHg9p',
        section: '2022',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto inicial",
                    description: ["Dentro de este projecto, lo que se buscaba era tomar un video y convertirlo en algo diferente.",
                        'Adicionalmente a esto, era mi primera vez haciendo rotoscopia, por lo que tenia que seguir el trazo muy firme.',
                        'Este projecto dio inicio a una de las tecnicas que mas he usado para la animación.'],
                    media: [samuraiPre],
                },
                production: {
                    title: "El proceso en si",
                    description: ["La idea era empezar de a poco, y con base en eso generar todos los frames.",
                        'Aqui estamos hablando de un clip de 5 segundos, a 25 frames por segundo, el cual esta en loop constantemente para darle mejor sensacion de movimiento.',
                        'Todo esto, añadiento tambien la creación de los fondos y del coloreado del lineart.'],
                    media: [samuraiPro],
                },
                postproduction: {
                    title: "Proceso final con premiere",
                    description: ["Usando premiere, pude agregar mas movimiento a los elementos a trav'es de animación vectorial, la cual esta completamente hecha en el mismo programa.",
                        'Durante ese ultimo proceso, tambien se hace el audio y el tema de retoque de color.'],
                    media: [samuraiPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p12',
        title: 'SALESmanago y Yandex ADS',
        description:
            'Este fue un proyecto en el que participé como editor, encargado de retocar el video de animación original, agregando logotipos y combinándolos de manera eficiente con las transiciones ya existentes. Además, integré todos los elementos en un corto período de tiempo de forma efectiva. Este proyecto fue editado utilizando Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/gw3qSyxWISw?si=kQbA5_IqMW0bBG6G',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: 'Preproducción',
                    description: ["Este projecto tenia dos versiones, por lo que el proceso para ambos videos en preproducción fue simillar.",
                        'Consistia en encontrar los logos para incluirlos, ademas de indentificar que elementos tcada añadir.',
                        'Esta es la V2.'],
                    media: [YandexPre1, YandexPre2],
                },
                production: {
                    title: "Producción",
                    description: ["Para este trabajo no me pidieron nada complejo, que consistia en añadir los logos y traducir los elementos del video.",
                        'Esto claramente sin afectar el video original y su profesionalismo. '],
                    media: [YandexPro1, YandexPro2],
                },
                postproduction: {
                    title: "Retoques finales",
                    description: ["El cierre es la revision de ambos videos, tanto en calidad, como en version para tener consistencia con el mismo."],
                    media: [YandexPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p13',
        title: 'AllDigital, SALESmanago y Yandex ADS',
        description:
            'Este es un proyecto en el cual mi rol fue como editor y traductor del video. Para el contenido principal, me encargué de agregar los logotipos de la marca e integrarlos de manera armoniosa con el material ya existente. Además, traduje el video, que originalmente estaba en inglés. Todo el trabajo fue realizado en un corto período de tiempo utilizando Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/gw3qSyxWISw?si=QUrFat9nCfqdG1lr',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: 'Preproducción',
                    description: ["Este projecto tenia dos versiones, por lo que el proceso para ambos videos en preproducción fue simillar.",
                        'Consistia en encontrar los logos para incluirlos, ademas de indentificar que elementos tcada añadir.',
                        'Esta es la V1.'],
                    media: [YandexPre1, YandexPre2],
                },
                production: {
                    title: "Producción",
                    description: ["Para este trabajo no me pidieron nada complejo, que consistia en añadir los logos y traducir los elementos del video.",
                        'Esto claramente sin afectar el video original y su profesionalismo. '],
                    media: [YandexPro1, YandexPro2],
                },
                postproduction: {
                    title: "Retoques finales",
                    description: ["El cierre es la revision de ambos videos, tanto en calidad, como en version para tener consistencia con el mismo."],
                    media: [YandexPost],
                },
            },
            sectionFooter: "",
        }
    },
]

export const AnimationProjectsEn: Project[] = [
    {
        id: 'p1',
        title: 'The Yellow Family Without Copyright',
        description:
            'This is a "Couch Gag" style project that combines two intro sequences from television series originally aired on the network formerly known as "FOX". The project was created exclusively for educational purposes and without any type of financial compensation. The animation was completed over the course of 2 weeks using Adobe Photoshop and Adobe After Effects.',
        iframeSrc: 'https://www.youtube.com/embed/ffGX5rWSqyM',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Project Concept",
                    description: [
                        "This is a 2-week project with the challenge of combining two intros from well-known series. Because of this, the development focuses on experimenting with animation and showcasing its visual potential.",
                        "My main goal was to apply the original artistic style of 'The Simpsons' while preserving the fast-paced rhythm of Modern Family.",
                        "After a brainstorming session, I was able to develop the concept further in order to begin the animation.",
                        "References:",
                        "Groening, M. (Creator). (1989–present). The Simpsons [Television series].",
                        "Levitan, S., & Lloyd, C. (Creators). (2009–2020). Modern Family [Television series]."
                    ],
                    media: [simpsonReference, modernReference],
                },
                production: {
                    title: "The Production Process",
                    description: [
                        "The process itself was divided into three sections: background creation, traditional animation, and vector animation.",
                        "First, the background creation, which refers to all the scenes that would later be animated as vectors in Adobe After Effects — including the images of the grandfather and the aunts.",
                        "Within the traditional animation, I focused on an 'in-between' style, subdividing each frame in half in order to make the family's sitting movement as fluid as possible.",
                        "Finally, the vector animation combines the traditionally animated clips with the static background images. At the same time, the timeline is configured so that they have a progressive zooming-out effect. For this process, it was important that the images were vector graphics so that their quality would not degrade during the process."
                    ],
                    media: [CouchPro1, CouchPro2, CouchPro3],
                },
                postproduction: {
                    title: "Final Details",
                    description: [
                        "Within the project's development, it is not only the animation that is produced, but the entirety of the story being told.",
                        "Therefore, during this stage, sounds are added, details are polished, and everything is reviewed to make sure it is in its proper place.",
                        "All with the goal of concluding the project in the best way possible."
                    ],
                    media: [CouchPost],
                },
            },
            sectionFooter: "This project does not infringe any copyright and gives full credit to the original concept's respective authors.",
        }
    },
    {
        id: 'p2',
        title: 'Rotoscoping Experiment',
        description:
            'This project is an experimental rotoscoping exercise created using Adobe Photoshop, with the goal of practicing animation techniques over live-action footage. The project was developed using clips from the feature film "Spider-Man 3" strictly for educational purposes and without any financial compensation. The animation was completed in 1 week using Adobe Photoshop.',
        iframeSrc: 'https://www.youtube.com/embed/bazyWtN-WX0',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Concepts",
                    description: [
                        "This was a short-timeframe exercise aimed at artistically transforming an existing clip in order to give it a new meaning.",
                        "Since it had a brief and purely experimental purpose, the focus was less on planning and more on understanding the execution.",
                        "References:",
                        "Raimi, S. (Director). (2007). Spider-Man 3 [Film].",
                        "Tesfaye, A. (2019). Blinding Lights [Song]. On After Hours. XO Records; Republic Records."
                    ],
                    media: [SpidermanPre],
                },
                production: {
                    title: "Creation Process",
                    description: [
                        "The initial idea was simply to trace each frame with a different color.",
                        "Therefore, the process focused on using a frame-by-frame tracking approach in order to keep the actions as unified as possible.",
                        "It is also worth noting that the animation is divided between characters, backgrounds, and effects; each of which is further subdivided into lineart and coloring layers."
                    ],
                    media: [SpidermanPro1, SpidermanPro2],
                },
                postproduction: {
                    title: "Final Details",
                    description: [
                        "In this last stage, Premiere and After Effects were used to enhance the animation, create the offset effect, and align the different layers.",
                        "The audio was also retouched and final text details were added to provide a bit more context."
                    ],
                    media: [SpidermanPost],
                },
            },
            sectionFooter: "This project does not infringe any copyright and gives full credit to the original concept's respective authors.",
        }
    },
    {
        id: 'p3',
        title: 'Deraíz',
        description:
            'This project was developed in collaboration with the Universidad de los Andes. Its purpose was to create an artistic visual expression movement by combining analog and digital techniques. It was a collaborative team effort where all members worked toward a shared creative objective. The animation was produced in authorized graffiti spaces and later composited in Photoshop. Original publication:',
        iframeSrc: 'https://drive.google.com/file/d/101m-0jSkYCH9VfXZf97SYLNLjBeLZI6Z/preview',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://www.instagram.com/reel/DKHhPdvN8NO/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Project Planning",
                    description: [
                        "This is easily one of the most ambitious projects I have had the opportunity to work on.",
                        "The initial concept was to create an animation based on two opposing topics, in this case, nature and industrialization.",
                        "We also wanted to generate a disruption within the system, creating an impact that could reach the public space.",
                        "That is where the concept of graffiti and muralism came from.",
                        "Since this was a collaborative effort, we decided to divide the project, with each member contributing a small section that would later be joined into the final piece.",
                        "The idea was to generate a design that would connect with another person's, creating an animated 'Exquisite Corpse'.",
                        "This included making digital tests, prototypes, and drafts before the production day."
                    ],
                    media: [deraizPre1, deraizPre2, deraizPre3],
                },
                production: {
                    title: 'The "Animation" Days',
                    description: [
                        "The process was divided into two dates: the graffiti day and the connection day.",
                        "On the graffiti day, we all gathered in a pre-agreed space where we each painted our frames by hand before photographing them.",
                        "Due to the nature of the process, it was necessary to animate it frame by frame in order to verify on the spot that the fluidity was adequate.",
                        "This was done collaboratively so that we could help one another.",
                        "The second part of the process involved compositing the photos into each person's video.",
                        "For this, we used Photoshop to correctly adjust the images and fix any gaps created by the layer when aligning the grid.",
                        "This was done using reference points placed on each frame to ensure the scale remained intact.",
                        "CLARIFICATION:",
                        "The spaces used for this process were authorized for this purpose. Special thanks to Universidad de los Andes for providing the space."
                    ],
                    media: [deraizPro1, deraizPro2, deraizPro3],
                },
                postproduction: {
                    title: "Final Details",
                    description: [
                        "During this stage, we had a project manager responsible for assembling all the pieces into the final whole.",
                        "Since no piece could be missing, teamwork was essential.",
                        "Everyone committed to completing and submitting their clips, which were reflected in the final product.",
                        "Another team member was in charge of producing the audio, bringing this project to its conclusion."
                    ],
                    media: [deraizPost],
                },
            },
            sectionFooter: "Special thanks to Universidad de los Andes for this project.",
        }
    },
    {
        id: 'p4',
        title: 'Camilo and Sofia',
        description:
            'This is a short film that I directed and edited in 2025. The production process lasted approximately 2 months, during which I was responsible for planning, script development, casting, and post-production editing. The project was carried out alongside a production assistant, 2 lead actors, and 8 supporting actors. It was edited using Adobe Premiere Pro in collaboration with the Universidad de los Andes.',
        iframeSrc: 'https://drive.google.com/file/d/1WwlQynzBXN-HRBTu0O6hgMcyh3UD2hig/preview',
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Storyboard and Pre-production",
                    description: [
                        "In creating this project, I wanted to tell a story rooted in an everyday anecdote, drawn from ordinary life and grounded in reality.",
                        "The original concept was to take an anecdote, such as a waiter arguing with a customer, and begin weaving a story from there.",
                        "By developing a storyboard and a script, I began building the narrative, aiming to effectively showcase the contrast between two completely opposite characters.",
                        "Alongside this, I also scouted filming locations, spoke with actors, and ran equipment tests to decide which elements to use in the short film.",
                        "References:",
                        "Sting. (1987). Englishman in New York [Song]. On ...Nothing Like the Sun. A&M Records."
                    ],
                    media: [cysPre1, cysPre2, cysPre3],
                },
                production: {
                    title: 'Shooting and Production',
                    description: [
                        "This project involved a total of one week of filming, including principal scenes and necessary reshoots.",
                        "All of this was managed under a very strict shooting schedule, as the restaurant owner did not want to lose potential customers during filming hours, meaning we had limited time to shoot each day.",
                        "This was all made possible with the help of my production assistant, the actors and actresses who supported the project, and the restaurant owner."
                    ],
                    media: [cysPro1, cysPro2],
                },
                postproduction: {
                    title: "Editing and Post-production",
                    description: [
                        "The final stage was primarily focused on assembling the clips in the edit.",
                        "This also included audio retouching, image correction, and incorporating the necessary visual graphics and titles."
                    ],
                    media: [cysPost],
                },
            },
            sectionFooter: 'Special thanks to the restaurant "La Esquina Vegetariana" and to Universidad de los Andes.',
        }
    },
    {
        id: 'p5',
        title: 'Rubik\'s Cube Experiment',
        description:
            'This is a short experimental rotoscoping animation created using Photoshop, featuring royalty-free external audio.',
        iframeSrc: 'https://www.youtube.com/embed/8fDgl2y5pW4?si=G0diJ7Bx9-Kbe3uO',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Concept",
                    description: [
                        "This was a simpler experiment to test a different approach to rotoscoping.",
                        "The objective was straightforward: take a video and transform how it was presented using the rotoscoping technique."
                    ],
                    media: [rubixPre],
                },
                production: {
                    title: "During Production",
                    description: [
                        "The animation was quite simple, first the lineart, then the fill.",
                        "In the initial concept, I had planned to also include the hands.",
                        "I did manage to finish the lineart for them, but I realized the concept would be far more interesting if the cube appeared to move on its own."
                    ],
                    media: [rubixPro],
                },
                postproduction: {
                    title: "Final Details",
                    description: [
                        "Post-production focused mainly on developing the separate movement and ensuring everything worked properly.",
                        "A generic audio track was also added."
                    ],
                    media: [rubixPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p6',
        title: 'Ihand',
        description:
            'This is a short commercial-style project designed to replicate the visual language of technology brand advertisements. The piece promotes the fictional product "Ihand", imagined as a smartphone embedded into the human hand. The project was created using Adobe Premiere Pro exclusively for learning purposes and without commercial intent. All assets used are royalty-free.',
        iframeSrc: 'https://drive.google.com/file/d/1_-sBUPp8M_1wnphZo3tSKYjp-P9vuXXH/preview',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Original Idea",
                    description: [
                        "The concept behind this project was to create a commercial for a non-existent product, inspired by real brands.",
                        "In this case, the main inspiration was Apple and its very distinctive visual style."
                    ],
                    media: [handPre],
                },
                production: {
                    title: "Production",
                    description: [
                        "This was primarily a quick editing exercise.",
                        "It was done using archival footage and royalty-free audio."
                    ],
                    media: [handPro],
                },
                postproduction: {
                    title: "Details",
                    description: [
                        "The final details consisted of polishing and adjusting everything to make it look as close to the reference style as possible."
                    ],
                    media: [handPost],
                },
            },
            sectionFooter: "All clips are in the public domain, as is the audio.",
        }
    },
    {
        id: 'p7',
        title: 'All Digital Media & Kommo',
        description:
            'This reel involved translation and localization work, as the original material was in English. I also modified the final on-screen information to align with the branding and company details of "All Digital Media". The editing adjustments were completed using Adobe Premiere Pro.',
        iframeSrc: 'https://youtube.com/embed/1WuCEfHVqKE?si=Cb7EJZq1qPUohQoi',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Before Starting",
                    description: [
                        "This is a re-editing project, so most of the material already existed. At this stage, the focus was simply on identifying what needed to be changed."
                    ],
                    media: [kommoPre],
                },
                production: {
                    title: "The Production Itself",
                    description: [
                        "The editing process was relatively straightforward.",
                        "The focus was on translating the on-screen elements and adding the necessary titles."
                    ],
                    media: [kommoPro],
                },
                postproduction: {
                    title: "Review",
                    description: [
                        "On the production side, this stage was simply about reviewing the details and making final adjustments.",
                        "The most notable change was updating the contact information, as this was tied to the same system."
                    ],
                    media: [kommoPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p8',
        title: 'All Digital Media & Big Commerce',
        description:
            'This reel involved translation and localization work from the original English version. I also adapted the final information sequence to match the branding requirements of "All Digital Media", including adjustments to the final transition displaying the company logo and corporate details. The project was edited using Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/Bmp48LleZ0E?si=LhpADvwiw_JX4yf-',
        section: '2023',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Before Starting",
                    description: [
                        "The pre-production process was mainly about analyzing the video and identifying what needed to be changed.",
                        "It also involved gathering all the necessary assets."
                    ],
                    media: [BigPre],
                },
                production: {
                    title: "Production Itself",
                    description: [
                        "In terms of text, the project itself was mainly about adding the new logos.",
                        "However, the most notable aspect was that I was asked to create a smoother and shorter version of the project.",
                        "For many sections, I had to build transitions from scratch and integrate them dynamically.",
                        "This applied to both the audio and the video."
                    ],
                    media: [BigPro1, BigPro2, BigPro3],
                },
                postproduction: {
                    title: "Final Review",
                    description: [
                        "After that, the process focused on reviewing with the client to ensure all the information was correctly applied and that no errors were present."
                    ],
                    media: [BigPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p9',
        title: 'Pre Icfes Con Estilo',
        description:
            'This commercial was produced for the educational institution "Pre Icfes con Estilo", where I served as director. The primary objective was to create both a YouTube advertisement and an introductory video for the institution\'s digital platform. While some archival material was provided, approximately 90% of the footage was filmed and produced by our team, which consisted of a cinematographer, an editor, and myself as director.',
        iframeSrc: 'https://www.youtube.com/embed/NBRRBUN4RIo?si=gGZIcidqop_jK5Q7',
        section: '2023',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Planning and Preparation",
                    description: [
                        "This project was created to produce an explanatory advertisement for the Pre Icfes con Estilo business, a preparation service for the national government exams.",
                        "The work was guided by pre-established brand guidelines that we had to follow throughout the video planning and scripting process.",
                        "It was also necessary to confirm the availability of all required filming locations, as well as to coordinate the actors and equipment needed."
                    ],
                    media: [preicfesPre],
                },
                production: {
                    title: "The Filming Days",
                    description: [
                        "We had 4 days to film, so every moment mattered.",
                        "We captured multiple takes from different angles across various spaces provided by the university, which gave us a wide range of material to choose from.",
                        "Our primary focus was on recording audio correctly.",
                        "We even ended up with more audio files than video files, to ensure the best possible sound quality."
                    ],
                    media: [preicfesPro],
                },
                postproduction: {
                    title: "Additional Material",
                    description: [
                        "Finally, we needed clips from the official platform in order to showcase all the available tools in detail.",
                        "This was achieved by recording the screen and using an animated mouse to provide a better visual walkthrough."
                    ],
                    media: [preicfesPost],
                },
            },
            sectionFooter: "Primary client: Pre Icfes con Estilo. Secondary client: Universidad de los Andes.",
        }
    },
    {
        id: 'p10',
        title: 'Singing a Sailboat',
        description:
            'This short film was produced in collaboration with a team of 3 people, where I assumed the role of director. The project\'s artistic intention was to portray the life of a humble sailmaker attempting to reconnect with his son. The production was carried out in collaboration with the Universidad de los Andes.',
        iframeSrc: 'https://www.youtube.com/embed/rDiEsuEZWrU?si=6IV62kOXw4F4L1N_',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Pre-production",
                    description: [
                        "For this project, we had to explore a character's life and use that as the basis for developing a short film.",
                        "Because of this, we spent weeks interviewing and getting to know different people.",
                        "We eventually found our character, 'Alejandro', whose humble life making candles became the heart of the story.",
                        "Since this initial phase was experimental, a lot of footage was recorded that did not make it into the final cut, as we explored different directions for the story.",
                        "However, this does not mean we worked without a script. ",
                        "We began building a structure based on what was and was not working."
                    ],
                    media: [CantarPre1, CantarPre2],
                },
                production: {
                    title: "Filming the Story Itself",
                    description: [
                        "During the filming days, everything depended on Alejandro's availability at the workshop.",
                        "Clips of him inside the workshop were not an issue, as we simply captured his day-to-day routine.",
                        "However, asking him to film in other locations proved to be more challenging.",
                        "There came a point where he no longer wanted to film, and we had to work with the material we already had.",
                        "Because of this, we even added clips of secondary characters to help complement the narrative."
                    ],
                    media: [CantarPro1, CantarPro2],
                },
                postproduction: {
                    title: "Final Adjustments",
                    description: [
                        "During post-production, the team decided to shift perspective and focus more on the son, using the same visual style throughout.",
                        "We also had to retouch the lighting, polish the audio, and ensure everything looked as good as possible before the final deadline."
                    ],
                    media: [CantarPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p11',
        title: 'Pirate vs Samurai',
        description:
            'This is a rotoscoping project in which I experimented with animation techniques during one of my first experiences using Adobe Photoshop. The project was created using Photoshop in combination with Adobe Premiere Pro. Stock audio was used, and the full production process took approximately 2 weeks, including recording the original frames, rotoscoping, and post-production.',
        iframeSrc: 'https://www.youtube.com/embed/QvqdybkfV2g?si=iCi8a9ctJ5-mHg9p',
        section: '2022',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Concept",
                    description: [
                        "The goal of this project was to take a video and transform it into something entirely different.",
                        "Additionally, it was my first time doing rotoscoping, so I had to follow the line of the original footage very carefully.",
                        "This project marked the beginning of one of the techniques I have used most in animation."
                    ],
                    media: [samuraiPre],
                },
                production: {
                    title: "The Process Itself",
                    description: [
                        "The idea was to start small and gradually build out all the frames from there.",
                        "We are talking about a 5-second clip at 25 frames per second, which loops continuously to give a better sense of movement.",
                        "All of this also included creating the backgrounds and coloring the lineart."
                    ],
                    media: [samuraiPro],
                },
                postproduction: {
                    title: "Final Process with Premiere",
                    description: [
                        "Using Premiere, I was able to add more movement to the elements through vector animation, which was built entirely within the same program.",
                        "During this final stage, the audio was also handled along with color grading."
                    ],
                    media: [samuraiPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p12',
        title: 'SALESmanago and Yandex ADS',
        description:
            'This was a project where I worked as editor, responsible for refining the original animated video by adding logos and integrating them efficiently with the existing transitions. Additionally, I incorporated all elements within a short timeframe in an effective manner. This project was edited using Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/gw3qSyxWISw?si=kQbA5_IqMW0bBG6G',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: 'Pre-production',
                    description: [
                        "This project had two versions, so the pre-production process for both videos was similar.",
                        "It involved finding the logos to be included, as well as identifying which elements needed to be added.",
                        "This is V2."
                    ],
                    media: [YandexPre1, YandexPre2],
                },
                production: {
                    title: "Production",
                    description: [
                        "The work requested for this project was not complicated, because it was only adding the logos and translating the on-screen elements.",
                        "All of this was done without compromising the original video or its professional quality."
                    ],
                    media: [YandexPro1, YandexPro2],
                },
                postproduction: {
                    title: "Final Touches",
                    description: [
                        "The closing stage involved reviewing both videos.",
                        "Likewise, checking quality and version consistency to ensure uniformity between them."
                    ],
                    media: [YandexPost],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p13',
        title: 'AllDigital, SALESmanago and Yandex ADS',
        description:
            'This is a project in which my role was both video editor and translator. For the main content, I was responsible for adding the brand logos and integrating them seamlessly with the existing video material. Additionally, I translated the video, which was originally in English. The entire project was completed within a short timeframe using Adobe Premiere Pro.',
        iframeSrc: 'https://www.youtube.com/embed/gw3qSyxWISw?si=QUrFat9nCfqdG1lr',
        section: '2024',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: 'Pre-production',
                    description: [
                        "This project had two versions, so the pre-production process for both videos was similar.",
                        "It involved finding the logos to be included, as well as identifying which elements needed to be added.",
                        "This is V1."
                    ],
                    media: [YandexPre1, YandexPre2],
                },
                production: {
                    title: "Production",
                    description: [
                        "The work requested for this project was not overly complex.",
                        "It mainly consisted of adding the logos and translating the on-screen elements.",
                        "All of this was done without compromising the original video or its professional quality."
                    ],
                    media: [YandexPro1, YandexPro2],
                },
                postproduction: {
                    title: "Final Touches",
                    description: [
                        "The closing stage involved reviewing both videos, aside from checking quality and version consistency to ensure uniformity between them."
                    ],
                    media: [YandexPost],
                },
            },
            sectionFooter: "",
        }
    },
]
