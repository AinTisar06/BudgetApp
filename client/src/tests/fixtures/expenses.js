import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "Kira",
    note: "Haziran",
    amount: 3000,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Sigara",
    note: "Kent",
    amount: 15,
    createdAt: moment(0).subtract(2, "days").valueOf(),
  },
  {
    id: "3",
    description: "Kredi Kartı",
    note: "En para",
    amount: 2000,
    createdAt: moment(0).add(3, "days").valueOf(),
  },
];

export default expenses;
