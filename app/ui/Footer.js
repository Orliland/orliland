import styles from "@/app/ui/footer.module.css";

export default function Footer() {
  // TODO: Remove mt-[430 despues de agregar contenido]
  return (
    <>
      <div className={styles.footer}></div>
      <footer className="container mx-auto mt-[430px] leading-4 text-center py-[60px]">
        <p className="text-base font-medium text-gray-600/60">
          @Orliland - Orlando Verdin
        </p>
        <p className="text-xs mt-[120px] text-black/20">
          Designed by a{" "}
          <a className="retro2" href="https://vjy.me" target="__blank">
            wizard
          </a>
          . Code by me.
        </p>
      </footer>
    </>
  );
}
