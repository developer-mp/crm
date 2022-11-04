import ReactTags from "react-tag-autocomplete";
import { useState } from "react";

const MultiStringField = (props) => {
  const parseValue = (value) => {
    if (!value) return [];
    return value.split(";").map((name, id) => ({ id, name }));
  };

  const parseTags = (tags = []) => {
    return tags.map((tag) => tag.name).join(";");
  };

  const [tagsFields, setTagsFields] = useState(parseValue(props.value));

  const onAddition = (tag) => {
    const newTags = tag.name
      .split(",")
      .filter((name) => !!name)
      .map((name) => ({ id: 0, name }));
    const tags = [...tagsFields, ...newTags];
    setTagsFields({ tags });
    this.props.onChange(parseTags(tags));
  };

  const onDelete = (index) => {
    const tags = [...tagsFields];
    tags.splice(index, 1);
    setTagsFields({ tags });
    this.props.onChange(this.parseTags(tags));
  };

  const onValidate = (tag) => {
    return !this.props.maxLength || tag.length <= this.props.maxLength;
  };

  const { value, readOnly, placeholder } = this.props;
  if (readOnly) {
    return <input disabled={true} value={value} />;
  }

  return (
    <ReactTags
      allowNew
      placeholder={placeholder || ""}
      removeButonText="Click to remove"
      tags={tagsFields}
      onAddition={onAddition}
      onDelete={onDelete}
      onValidate={onValidate}
      delimiters={[";", "Enter"]}
    />
  );
};

export default MultiStringField;
