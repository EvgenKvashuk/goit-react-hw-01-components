import css from "./Statistics.module.css";


export const Statistics = ({ stats, title }) => {
  return (
    <section className={css['statistics']}>
      {title = " " ?
        (<h2 className={css['title']}>{title}</h2>
        ) : (
          undefined
        )}
      <ul className={css['stats-list']}>
        {stats.map(stat => (
          <li key={stat.id}>
            <span className={css['label']}>{stat.label}</span>
            <span className={css['percentage']}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
