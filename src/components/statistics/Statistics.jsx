import "./Statistics.css";

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stats-list">
        {stats.map(stat => (
          <li key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );


};
