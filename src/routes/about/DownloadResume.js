import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/CV-NADA-BALKASSEM.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="CV-NADA-BALKASSEM.pdf">
        <img
          src={DownloadIcon}
          alt="Resume download button"
          className="download-img"
        />
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
