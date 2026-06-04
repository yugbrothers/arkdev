import { GeneratedAsset } from "./types";

type Props = {
  assets: GeneratedAsset[];
};

export default function AssetLibrary({
  assets
}: Props) {

  return (
    <div className="rounded-3xl border p-6">

      <h2 className="text-xl font-semibold mb-4">
        Asset Library
      </h2>

      {assets.length === 0 && (
        <p>No generated assets yet.</p>
      )}

      <div className="grid gap-4">

        {assets.map(asset => (
          <div
            key={asset.id}
            className="rounded-xl border p-4"
          >
            <img
              src={asset.image}
              alt={asset.prompt}
              className="rounded-xl mb-3"
            />

            <p className="text-sm">
              {asset.prompt}
            </p>

            <p className="text-xs opacity-60 mt-2">
              {asset.createdAt}
            </p>

            <a
              href={asset.image}
              target="_blank"
              className="inline-block mt-3 border rounded-xl px-3 py-2"
            >
              Download
            </a>

          </div>
        ))}

      </div>

    </div>
  );
}
