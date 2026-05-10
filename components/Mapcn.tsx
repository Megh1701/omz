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
    lng: 72.501,
    lat: 23.242,
  },
  {
    id: 2,
    name: "Ahmedabad Office, Gujarat",
    lng: 72.5714,
    lat: 23.0225,
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
                        <p className="font-medium">{loc.name}</p>
                        <p className="text-xs text-zinc-500">
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