import React, { useEffect, useState } from "react";

export default function CustomerProfile(props) {
  const fetchCustomerProfile = async () => {
    const response = await fetch(
      `https://cyf-react.glitch.me/customers/${props.id}`
    ).then(res => res.json());
    return response;
  };
  const [data, setData] = useState({});

  useEffect(() => {
    fetchCustomerProfile().then(data => setData(data));
  }, [props.id]);
  console.log(data);
  return (
    <div>
      CustomerProfile {data.id} {data.email} {data.phoneNumber} {data.vip}
    </div>
  );
}
