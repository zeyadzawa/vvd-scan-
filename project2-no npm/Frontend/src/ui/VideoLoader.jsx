function VideoLoader() {
  return (
    <div className="flex min-h-96 items-center justify-center">
      <video className="" loop autoPlay muted>
        <source
          src="../../../Animation - 1728661735514 (1).webm"
          type="video/webm"
        />
      </video>
    </div>
  );
}

export default VideoLoader;
