import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import type {Project} from '../types'
import { AnimationProjects, AnimationProjectsEn } from '../data/projects'
import styles from './Proyectos.module.css'

export function Proyectos() {
  const { t, lang } = useLang()

  const [projects, setProjects] = useState<Project[]>(
      lang === 'en' ? AnimationProjectsEn : AnimationProjects
  )
  const [selectedId, setSelectedId] = useState<string>(
      lang === 'en' ? AnimationProjectsEn[0].id : AnimationProjects[0].id
  )

  useEffect(() => {
    const nextProjects = lang === 'en' ? AnimationProjectsEn : AnimationProjects
    setProjects(nextProjects)
    setSelectedId(nextProjects[0].id)
  }, [lang])

  const selected = projects.find((p) => p.id === selectedId) ?? projects[0]


  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {t.proyectos.sections.map((sec) => {
            const sectionProjects = projects.filter((p) => p.section === sec.id)
            return (
              <div key={sec.id} className={styles.sectionGroup}>
                <p className={styles.sectionTitle}>{sec.label}</p>
                {sectionProjects.map((proj) => (
                  <button
                    key={proj.id}
                    className={`${styles.projBtn} ${selectedId === proj.id ? styles.active : ''}`}
                    onClick={() => setSelectedId(proj.id)}
                  >
                    {proj.title}
                  </button>
                ))}
              </div>
            )
          })}
                  <h5 className={styles.sectionSubTitle}>{t.proyectos.aclaration}</h5>
        </aside>

        {/* Detail panel */}
        <div className={styles.detail}>
          <div className={styles.detailHeader}>
            <h2 className={styles.detailTitle}>{selected.title}</h2>
            <p className={styles.detailDesc}>{selected.description}</p>
          </div>
          <div className={styles.iframeWrapper}>
            {selected.iframeSrc ? (
              <iframe
                src={selected.iframeSrc}
                title={selected.title}
                className={styles.iframe}
                allowFullScreen
              />
            ) : (
              <p className={styles.iframePlaceholder}>
                Agrega una URL para ver la demo aquí
              </p>
            )}
          </div>
        </div>
          </div>
    </section>
  )
}
