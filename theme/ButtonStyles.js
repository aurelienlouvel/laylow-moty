import Colors from "./Colors";

export default {
  primary: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    margin: 24,
    backgroundColor: Colors.rouge,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  secondary: {
    margin: 24,
    backgroundColor: Colors.rouge,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  music: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
  },
  text: {
    color: Colors.blanc,
    fontSize: 18,
    fontFamily: "IvyMode-Bold",
  },
  textMusic: {
    color: "#1DB954",
    color: Colors.blanc,
    fontSize: 18,
    fontFamily: "IvyMode-SemiBold",
    marginHorizontal: 6,
  },
  icon: {
    marginHorizontal: 6,
  },
};
