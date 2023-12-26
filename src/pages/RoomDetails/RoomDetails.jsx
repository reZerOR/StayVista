import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import Loader from "../../components/Shared/Loader";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";

const RoomDetails = () => {
  const { id } = useParams();
  const [loading, setLoding] = useState(false);
  const [room, setRooms] = useState({});
  useEffect(() => {
    setLoding(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (id) {
          const filtered = data.find((room) => room._id === id);
          setRooms(filtered);
          setLoding(false);
        }
      });
  }, [id]);

  if (loading) return <Loader></Loader>;
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header room={room} />
        </div>
        <div className="grid gap-10 mt-6 grid-cols-1 md:grid-cols-7">
          <RoomInfo room={room} />
          {/* Calender */}
          <div className="md:col-span-3 order-first md:order-last mb-10">
            <RoomReservation />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
