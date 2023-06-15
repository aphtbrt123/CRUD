export default function PostDetail({params}: {params: {postid: string}}){
    console.log(params);
    return <div>Post {params.postid}</div>;
}