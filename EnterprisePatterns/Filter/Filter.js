class Filter
{
    filter(items, spec)
    {
        return items.filter(x => spec.isSatisfied(x));
    }
}

export default Filter;
