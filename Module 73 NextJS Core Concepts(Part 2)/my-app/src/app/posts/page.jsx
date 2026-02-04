import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
};

export default async function Posts() {
    const posts = await getPosts();

    return (
        <div className="gap-8 grid grid-cols-4">
            {
                posts.map((singlePost) => {
                    return (
                        <div key={singlePost.id} className="border-2 border-slate-700 p-5">
                            <p>{singlePost.id}</p>
                            <p>{singlePost.title}</p>
                            <p>{singlePost.body}</p>
                            <Link href={`/posts/${singlePost.id}`}>
                            <button type="button" className="btn bg-red-400">Details</button>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
}
