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
  },
  textMusic: {
    fontSize: 18,
    fontFamily: "SFPro-Bold",
    marginHorizontal: 8,
  },
  icon: {
    marginHorizontal: 8,
  },
};
