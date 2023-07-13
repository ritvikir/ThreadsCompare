import { useSearchParams } from "next/navigation";
import { ThreadsAPI, ThreadsUser } from "threads-api";
import Image from "next/image";

const threadsAPI = new ThreadsAPI();

const username = "_junhoyeo";

async function getData(username1, username2) {
  const userID1 = await threadsAPI.getUserIDfromUsername(username1);
  const userID2 = await threadsAPI.getUserIDfromUsername(username2);

  if (!userID1) {
    return { userID1: "0" };
  }
  if (!userID2) {
    return { userID2: "0" };
  }

  const user1 = await threadsAPI.getUserProfile(username1, userID1);
  const posts1 = await threadsAPI.getUserProfileThreads(username1, userID1);
  const replies1 = await threadsAPI.getUserProfileReplies(username1, userID1);
  const user2 = await threadsAPI.getUserProfile(username2, userID2);
  const posts2 = await threadsAPI.getUserProfileThreads(username2, userID2);
  const replies2 = await threadsAPI.getUserProfileReplies(username2, userID2);

  return { userID1, user1, posts1, replies1, userID2, user2, posts2, replies2 };
}

export default async function Home({ searchParams }) {
  // const searchParams = useSearchParams()

  // const username1 = searchParams.get('username1')
  // const username2 = searchParams.get('username2')

  // console.log(username1)
  // console.log(username2)
  const { username1, username2 } = searchParams;

  // console.log(username1);
  // console.log(username2);

  const { userID1, user1, posts1, replies1, userID2, user2, posts2, replies2 } =
    await getData(username1, username2);

    return (
    <div className="container mx-auto pt-10 px-14">
      {/* {userID1 != 0 ? (
        <div>
          <h2>{posts1.length}</h2>
          <h2>{user1.follower_count}</h2>
          <h2>{replies1.length}</h2>
        </div>
      ) : (
        <p>User Not Found!! Please Try Again.</p>
      )}

      {userID2 != 0 ? (
        <div>
          <h2>{posts2.length}</h2>
          <h2>{user2.follower_count}</h2>
          <h2>{replies2.length}</h2>
        </div>
      ) : (
        <p>User Not Found!! Please Try Again.</p>
      )} */}
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center mb-6">
            <Image
              src={user1.profile_pic_url}
              alt="User 1 Profile"
              width={100}
              height={100}
              className="w-12 h-12 rounded-full mr-4"
            />
            <h2 className="text-xl font-bold">{user1.username}</h2>
          </div>
          <p className="text-gray-600 mb-6">{user1.biography}</p>{" "}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Follower Count</h3>
              <p>{user1.follower_count}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Number of Posts</h3>
              <p>{posts1.length}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Number of Replies</h3>
              <p>{replies1.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center mb-6">
          <Image
              src={user2.profile_pic_url}
              alt="User 1 Profile"
              width={100}
              height={100}
              className="w-12 h-12 rounded-full mr-4"
            />
            <h2 className="text-xl font-bold">{user2.username}</h2>
          </div>
          <p className="text-gray-600 mb-6">{user2.biography}</p>
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Follower Count</h3>
              <p>{user2.follower_count}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Number of Posts</h3>
              <p>{posts2.length}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Number of Replies</h3>
              <p>{replies2.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
