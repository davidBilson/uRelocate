import styles from './Eligibility.module.css'
import { EligibleForm } from './EligibleForm'
import {CiLocationOn} from 'react-icons/ci'

export const Eligibility = () => {
  return (
    <section className={styles.eligibleParentContainer}>
      <section className={styles.eligibleContainer}>
        <div className={styles.elContainerOne}>
          <EligibleForm />
        </div>
        <div className={styles.elContainerTwo}>
          <div className={styles.elDarkOverlay}>
            <div className={styles.overlayContent}>
            <p className={styles.overlayText}>Thanks to Reloroots' invaluable resources, my relocation process was not only assisted but also successfully executed with their crucial guidance and support.</p>
            <p className={styles.overlayText2}>- Deborah Johnson</p>
            <p className={styles.overlayTextLocation}> <CiLocationOn size={'16px'} /> Chicago, Illinois</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}