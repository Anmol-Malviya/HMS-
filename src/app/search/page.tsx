import { Map, List, LayoutGrid, Search as SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SearchFilters from '@/components/SearchFilters';
import PropertyCard from '@/components/PropertyCard';
import { mockProperties } from '@/data/mock';

export default function SearchResultsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        
        {/* Top Search Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center border border-border/50">
          <div className="relative w-full md:flex-1">
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input defaultValue="Bangalore" className="pl-10 h-12 w-full text-lg border-none shadow-none focus-visible:ring-0 bg-slate-50" placeholder="Search city or university..." />
          </div>
          <div className="h-10 w-px bg-border hidden md:block"></div>
          <Button size="lg" className="w-full md:w-auto h-12 px-8 font-semibold">Update Search</Button>
        </div>

        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Student accommodation in Bangalore</h1>
            <p className="text-slate-500">{mockProperties.length} properties found</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px] bg-white h-10">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="highest-rated">Highest Rated</SelectItem>
                <SelectItem value="nearest">Nearest to University</SelectItem>
              </SelectContent>
            </Select>
            
            <Tabs defaultValue="list" className="hidden md:block">
              <TabsList className="h-10 bg-white border shadow-sm">
                <TabsTrigger value="list" className="h-8 data-[state=active]:bg-slate-100"><List className="w-4 h-4 mr-2" /> List</TabsTrigger>
                <TabsTrigger value="map" className="h-8 data-[state=active]:bg-slate-100"><Map className="w-4 h-4 mr-2" /> Map</TabsTrigger>
                <TabsTrigger value="split" className="h-8 data-[state=active]:bg-slate-100"><LayoutGrid className="w-4 h-4 mr-2" /> Split</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 hidden md:block">
            <SearchFilters />
          </aside>
          
          {/* Results Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
              {/* Duplicating for UI fullness */}
              {mockProperties.map(property => (
                <PropertyCard key={property.id + '-dup'} property={{...property, id: property.id + '-dup', name: property.name + ' (New)'}} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" disabled>&lt;</Button>
                <Button variant="default" size="icon" className="bg-primary text-white">1</Button>
                <Button variant="ghost" size="icon">2</Button>
                <Button variant="ghost" size="icon">3</Button>
                <Button variant="ghost" size="icon">...</Button>
                <Button variant="outline" size="icon">&gt;</Button>
              </div>
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
}
