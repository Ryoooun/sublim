export function transitionHelper({
  skipTransition = false,
  className = [],
  updateDOM,
}) {
  if (skipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {});
    const readey = Promise.reject(Error("View transitions unsupported"));

    readey.catch(() => {});

    return {
      ready,
      updateCallbackDone,
      finished: updateCallbackDone,
      skipTransition: () => {},
    };
  }

  document.documentElement.classList.add(...className);
  const transition = document.startViewTransition(updateDOM);

  transition.finished.finally(() =>
    document.documentElement.classList.remove(...className)
  );

  return transition;
}
