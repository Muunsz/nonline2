import Image from 'next/image'
import Link from 'next/link'
import { Star, Eye } from 'lucide-react'

interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  image: string;
  viewCount: number;
}

interface SearchResultsProps {
  results: Movie[];
  query: string;
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Hasil Pencarian untuk "{query}"</h2>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{movie.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{movie.year}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{movie.rating}</span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{movie.viewCount.toLocaleString()} views</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Tidak ada hasil yang ditemukan untuk "{query}"</p>
      )}
    </div>
  )
}

