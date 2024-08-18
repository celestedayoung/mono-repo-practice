export default function NoticeDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>공지사항 상세 - ID: {params.id}</h1>
    </div>
  );
}
