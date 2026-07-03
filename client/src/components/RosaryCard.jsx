function RosaryCard(props) {
  const vibrate = (pattern = 50) => {
    if (navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  };

  return (
    <div className="rosary-card">
      {props.cardTitle && <h3>{props.cardTitle}</h3>}
      {props.mysteryGroup && <h3>{props.mysteryGroup}</h3>}
      <div className="rosary-card-body">
        {props.image && <img src={props.image} alt="mystery" />}
        {props.verse && <h4 className={props.class}>{props.verse}</h4>}
        {props.scripture && (
          <p dangerouslySetInnerHTML={{ __html: props.scripture }} />
        )}
        {props.date && <p className="date">{props.date}</p>}
        {props.children}

        {props.beads && (
          <div
            style={{
              display: "flex",
              alignItems: "space-around",
              justifyContent: "space-around",
              margin: "10% auto",
            }}
          >
            <button
              className="btn-outline"
              style={{
                display: "inline-block",
                padding: "5px 15px",
                fontSize: "20px",
                marginRight: "100px",
              }}
              onClick={() => {
                vibrate();
                props.onHandlePrev();
              }}
            >
              &#10094;
            </button>
            <button
              className="btn-outline"
              style={{
                display: "inline-block",
                padding: "5px 15px",
                fontSize: "20px",
              }}
              onClick={() => {
                vibrate();
                props.onHandleNext();
              }}
            >
              &#10095;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RosaryCard;
