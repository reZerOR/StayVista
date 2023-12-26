import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoding] = useState(false);
  const category = params.get("category");

  useEffect(() => {
    setLoding(true);
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
        setLoding(false);
      });
  }, [category]);

  if (loading) return <Loader></Loader>;
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div
          className="grid pt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
     xl:grid-cols-5 gap-8"
        >
          {rooms.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[calc(100vh-300px)] items-center justify-center">
          <Heading
            center={true}
            subtitle={"Please Select Other Categories."}
            title={"No Rooms Available In This Category"}
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
