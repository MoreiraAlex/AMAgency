import styles from '../styles/layout/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>AMAgency &copy; 2022 Todos os direitos reservados</p>
      <p>Desenvolvido por <a href="https://github.com/MoreiraAlex" target="_blank">Alex Moreira</a></p>
    </footer>
  )
}
