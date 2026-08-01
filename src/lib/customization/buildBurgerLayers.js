export default function buildBurgerLayers(customization) {
  const layers = [];

  // Pan superior
  layers.push({
    id: "top-bun",
    type: "top-bun",
  });

  // Extras
  customization.extras.forEach((extra) => {
    layers.push({
      id: extra,
      type: extra,
    });
  });

if (customization.pattyType) {
  let pattyCount = 1;

  if (customization.size === "doble") pattyCount = 2;
  if (customization.size === "triple") pattyCount = 3;

  for (let i = 0; i < pattyCount; i++) {
    layers.push({
      id: `${customization.pattyType}-${i}`,
      type: customization.pattyType,
    });
  }
}

  // Pan inferior
  layers.push({
    id: "bottom-bun",
    type: "bottom-bun",
  });

  return layers;
}