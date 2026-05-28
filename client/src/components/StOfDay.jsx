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
        <h2>{todaysSaint.saint_name}</h2>
        <h3>{todaysSaint.id}</h3>
        <p>{todaysSaint.saint_reflection}</p>
        <h3>Patron Saint of:</h3>
        <p>
          {todaysSaint.saint_patron.map((item, index) =>
            index < todaysSaint.saint_patron.length - 1 ? (
              <span>{item} ,</span>
            ) : (
              <span>{item}</span>
            ),
          )}
        </p>
      </div>
      <div className="st-of-day-card">
        <img src={todaysSaint.saint_image} alt={todaysSaint.saint_name} />
      </div>
      <div className="st-of-day-card">
        <p>{todaysSaint.saint_story}</p>
      </div>
    </section>
  );
}

export default StOfDay;
