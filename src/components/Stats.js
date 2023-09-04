export default function Stats({ items }) {
  // if no items in list return early
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items on your packing list.</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go!`
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
