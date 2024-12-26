import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  id: string;
  title: string;
  datetime: string;
  location: string;
  description: string;
  imageUrl: string;
  speaker: string;
}

export default function EventCard({
  id,
  title,
  datetime,
  location,
  description,
  imageUrl,
  speaker
}: EventCardProps) {
  return (
    <Link href={`/activities/${id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200">
        {/* Image */}
        <div className="relative h-[400px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Speaker Info */}
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full overflow-hidden relative border border-gray-100">
              <Image
                src={imageUrl}
                alt={speaker}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-semibold text-gray-900">{speaker}</h3>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>

          {/* Event Info */}
          <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#030041] transition-colors">
            {title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-sm text-gray-500">{datetime}</span>
            <span className="text-sm text-[#030041] hover:text-[#040158] font-medium">
              ดูรายละเอียด →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 