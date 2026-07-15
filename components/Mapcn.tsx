import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  {
    id: 1,
    name: "Kalol Office, Gujarat",
    address: "126/127, City Mall-1, Kalol, Gandhinagar",
    lng: 72.501,
    lat: 23.242,
  },
  {
    id: 2,
    name: "Ahmedabad Office, Gujarat",
    address: "Vaishnodevi Circle, Ahmedabad",
    lng: 72.5472,
    lat: 23.1413,
  },
];

export function MarkerMap() {
  return (
    <div className="space-y-6 bg-black text-zinc-100 p-4">
      {/* Heading Card */}
      <Card className="bg-black border-zinc-800 text-zinc-100">
        <CardHeader>
          <CardTitle className="text-6xl">Our Offices</CardTitle>
          <p className="text-zinc-500 text-sm">
            We operate from two key locations in Gujarat.
          </p>
        </CardHeader>
      </Card>

      {/* Individual Maps */}
      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((loc) => (
          <Card
            key={loc.id}
            className="overflow-hidden bg-black border-zinc-800 text-zinc-100"
          >
            <CardHeader>
              <CardTitle className="text-base">{loc.name}</CardTitle>
              <p className="text-xs text-zinc-400 mt-1">{loc.address}</p>
            </CardHeader>

            <CardContent className="p-0">
              <div className="h-[300px] w-full">
                <Map center={[loc.lng, loc.lat]} zoom={13}>
                  <MapMarker longitude={loc.lng} latitude={loc.lat}>
                    <MarkerContent>
                      <div className="bg-zinc-100 size-3 rounded-full shadow-[0_0_14px_rgba(161,161,170,0.6)]" />
                    </MarkerContent>

                    <MarkerTooltip>{loc.name}</MarkerTooltip>

                    <MarkerPopup>
                      <div className="space-y-1 bg-black text-zinc-100">
                        <p className="font-medium text-sm">{loc.name}</p>
                        <p className="text-xs text-zinc-400">{loc.address}</p>
                        <p className="text-[10px] text-zinc-600">
                          {loc.lat.toFixed(4)}, {loc.lng.toFixed(4)}
                        </p>
                      </div>
                    </MarkerPopup>
                  </MapMarker>
                </Map>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}