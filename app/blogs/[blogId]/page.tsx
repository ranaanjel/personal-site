export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  let { blogId } = await params;

  console.log("blogId: ", blogId);

  return (
    <div>
      <h1 className="text-3xl font-bold">Blog ID: {blogId}</h1>
    </div>
  );
}
