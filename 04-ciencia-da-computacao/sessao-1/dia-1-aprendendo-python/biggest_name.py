def find_biggest_name(names):
    biggestname = names[0]
    for name in names:
        if len(name) > len(biggestname):
            biggestname = name
    return biggestname
