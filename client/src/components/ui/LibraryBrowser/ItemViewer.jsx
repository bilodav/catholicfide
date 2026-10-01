import styles from "./ItemViewer.module.css";

function ItemViewer({
  content,
  language,
  displayExtraInfo = false,
  extraInfoFields,
  renderContent,
}) {
  return (
    <>
      <div
        className={`${styles["itemview-card"]} ${styles["itemview-nodesc"]}`}
      >
        {content ? (
          <>
            <h3>{content.metadata.title}</h3>
            {renderContent(content, language)}
          </>
        ) : (
          <h3>Select an item to view it.</h3>
        )}
      </div>

      {extraInfoFields && displayExtraInfo && content && (
        <div
          className={`${styles["itemview-card"]} ${styles["itemview-nodesc"]}`}
        >
          <h3>Extra Info</h3>
          {extraInfoFields.map(([label, key]) => (
            <div key={key}>
              <h4>{label}</h4>
              <p>{content.metadata[key]}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ItemViewer;
