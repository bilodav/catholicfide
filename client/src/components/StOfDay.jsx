import saintOfThedayDataApi from "../assets/data/db_saint_of_the_day";

function StOfDay() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let stringdate = `${month}/${day}`;

  console.log(stringdate);

  let todaysSaint = saintOfThedayDataApi.find(
    (saint) => saint.saint_date == stringdate,
  );

  return (
    <section className="st-of-day">
      <div className="st-of-day-card">
        <h2>
          {todaysSaint.saint_name} - {todaysSaint.id}
        </h2>
        <p>
          {todaysSaint.saint_lifetime ? (
            <i>({todaysSaint.saint_lifetime})</i>
          ) : (
            <i>(Feast Day)</i>
          )}
        </p>
        <h3>Reflection</h3>
        <p>{todaysSaint.saint_reflection}</p>
        {todaysSaint.saint_patron ? (
          <div>
            <h3>Patron Saint of:</h3>
            <p>
              {todaysSaint.saint_patron.map((item, index) =>
                index < todaysSaint.saint_patron.length - 1 ? (
                  <span key={index}>{item} ,</span>
                ) : (
                  <span key={index}>{item}</span>
                ),
              )}
            </p>
          </div>
        ) : null}
      </div>
      <div className="st-of-day-card">
        <img src={todaysSaint.saint_image} alt={todaysSaint.saint_name} />
      </div>
      <div className="st-of-day-card">
        {todaysSaint.saint_lifetime ? <h3>Story</h3> : <h3>Description</h3>}
        <p>{todaysSaint.saint_story}</p>
      </div>
    </section>
  );
}

export default StOfDay;
