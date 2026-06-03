type Props = {
  image?: string;
  prompt?: string;
};

export default function AssetLibrary({
  image,
  prompt
}: Props) {

  return (
    <div className="rounded-3xl border p-6">

      <h2 className="text-xl font-semibold mb-4">
        Asset Library
      </h2>

      {!image && (
        <p>
          Generated assets will appear here.
        </p>
      )}

      {image && (
        <div>

          <img
            src={image}
            alt={prompt}
            className="rounded-xl mb-4"
          />

          <p className="text-sm opacity-80">
            {prompt}
          </p>

        </div>
      )}

    </div>
  );
}
