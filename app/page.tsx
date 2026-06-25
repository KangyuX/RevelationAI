import './globals.css';
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              RevelationAI
            </h1>

            <p className="text-lg sm:text-2xl mb-4 text-blue-100">
              God with Us
            </p>

            <p className="text-base sm:text-xl mb-8 text-blue-50">
              Experience the Word of God like never before. Read, study, and grow in your faith journey with our comprehensive Bible reading and fellowship platform.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* COLUMN 1 */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Grow in Faith
              </h2>
            </div>

            <div className="flex flex-col gap-4 p-4 sm:p-6">
              <div className="px-6 py-4 bg-blue-700 rounded-lg shadow hover:shadow-lg transition text-white">
                <Link href="/read_the_bible">Read the Bible</Link>
              </div>
              <div className="px-6 py-4 bg-blue-700 rounded-lg shadow hover:shadow-lg transition text-white">
                See Featured Verses
              </div>
              <div className="px-6 py-4 bg-blue-700 rounded-lg shadow hover:shadow-lg transition text-white">
                Fellowship
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                About Us
              </h2>
            </div>

            <div className="flex flex-col gap-4 p-4 sm:p-6">
              <p>
            RevelationAI is more than just a Bible app. It's a community where believers come together to study, pray, and encourage one another in their walk with Christ.
              </p>
            Most importantly, it's where to go if you can't get yourself to read a single verse (like me)
            </div>
          </div>

        </div>
      </div>
      <div>

      </div>
    </main>
  );
}