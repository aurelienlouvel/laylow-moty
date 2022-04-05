import Colors from "./Colors";

export default {
  fixed: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    margin: 24,
    backgroundColor: Colors.rouge,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  normal: {
    margin: 24,
    backgroundColor: Colors.rouge,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  music: {
    marginVertical: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.blanc,
    fontSize: 18,
    fontFamily: "SFPro-Bold",
    marginHorizontal: 8,
  },
  textMusic: {
    fontSize: 18,
    fontFamily: "SFPro-Bold",
    marginHorizontal: 4,
  },
  icon: {
    marginHorizontal: 8,
  },
  iconMusic: {
    marginHorizontal: 4,
  },
};
