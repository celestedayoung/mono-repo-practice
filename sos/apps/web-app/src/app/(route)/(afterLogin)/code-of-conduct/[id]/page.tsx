export default function CodeOfConductDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>행동강령 상세 - ID: {params.id}</h1>
    </div>
  );
}
