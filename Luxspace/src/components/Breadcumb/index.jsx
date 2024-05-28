import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function Breadcumb({ list }) {
  return (
    <div>
      <section className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto">
          <ul className="breadcrumb">
            {list?.map?.((item, index) => {
              const arias = index === list?.length ? { "aria-label": "current-page" } : {};
              return (
                <li key={item.url} {...arias}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

Breadcumb.propTypes = {
  list: PropTypes.array.isRequired,
};
