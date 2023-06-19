import Gallery from "@/components/Gallery";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-14 py-20">
      <div>
      <SearchBar /> 
      <Gallery />
      </div>
    </main>
  );
}
