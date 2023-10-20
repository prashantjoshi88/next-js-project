import { useRouter } from "next/router";


import TableComponent from "../../components/tableComponent";
const dailyActivityColumns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 100,
  },
  {
    title: 'Activity Type',
    dataIndex: 'activityType',
    key: 'activityType',
    width: 150,
  },
  {
    title: 'Duration (minutes)',
    dataIndex: 'duration',
    key: 'duration',
    width: 150,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
];

const dailyActivityData = [];
for (let i = 0; i < 50; i++) {
  dailyActivityData.push({
    key: i,
    date: `2023-10-${i + 1}`,
    activityType: `Activity ${i + 1}`,
    duration: Math.floor(Math.random() * 60) + 1, // Random duration between 1 and 60 minutes
    location: `Location ${i + 1}`,
  });
}


export default function Users() {
  const router = useRouter()
    return (
      <>

      <TableComponent title={router.query.id} data={dailyActivityData} columns={dailyActivityColumns} />
      </>
    );
  }