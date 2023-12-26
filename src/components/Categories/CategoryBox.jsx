/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const hadleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = { ...currentQuery, category: label };

    const url = qs.stringifyUrl({
      url: "/",
      query: updatedQuery,
    });
    navigate(url);
  };
  params.get("category");
  return (
    <div
      onClick={hadleClick}
      className={`flex flex-col items-center justify-center gap-2 ${
        selected && "border-b-2 text-neutral-800 border-neutral-800"
      } p-3 text-gray-400 hover:text-neutral-800 transition cursor-pointer`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
